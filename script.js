document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

const images = document.querySelectorAll(".carousel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Auto Slide Every 3 Seconds
setInterval(nextImage, 3000);
