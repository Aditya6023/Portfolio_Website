document.addEventListener('DOMContentLoaded', function() {
    // Existing code (e.g., matrix effect setup)
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);

    // New code for fade-in effect
    const sections = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Typewriter effect triggered on intersection
const aboutSkillsSection = document.querySelector('#about-skills');
const typewriterText = document.querySelector('.typewriter1');

const typewriterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typewriterText.style.animationPlayState = 'running'; // Start the animation
            typewriterObserver.unobserve(entry.target); // Stop observing after animation starts
        }
    });
}, { threshold: 0.1 });

// Initial animation state is paused
typewriterText.style.animationPlayState = 'paused';

typewriterObserver.observe(aboutSkillsSection);

document.getElementById('scrollToAbout').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});
