/* =========================
   FORCE HOME ON RELOAD
========================= */

// Detect page reload
if (performance.getEntriesByType("navigation")[0].type === "reload") {

    // If NOT already on index.html
    if (!window.location.pathname.endsWith("index.html") &&
        window.location.pathname !== "/") {

        window.location.href = "index.html";
    }
}
/* ========= HOME PAGE VIDEO ========= */

const homeVideo = document.getElementById("bgVideo");
const homeImage = document.querySelector(".image-bg");

if (homeVideo) {
    homeVideo.addEventListener("ended", () => {
        homeVideo.classList.add("fade-out");

        setTimeout(() => {
            homeImage.classList.add("show");
        }, 1200);
    });
}


/* ========= ABOUT PAGE VIDEO ========= */

const aboutVideo = document.getElementById("aboutVideo");
const aboutImage = document.querySelector(".image-bg1");

if (aboutVideo) {
    aboutVideo.addEventListener("ended", () => {
        aboutVideo.classList.add("fade-out");

        setTimeout(() => {
            aboutImage.classList.add("show");
        }, 1200);
    });
}

const video = document.getElementById("bgVideo");
const imageBg = document.querySelector(
  ".image-bg, .image-bg1, .image-bg-project"
);

if(video){
    video.addEventListener("ended", () => {
        video.classList.add("fade-out");
        if(imageBg) imageBg.classList.add("show");
    });
}