document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Navbar Toggle for Mobile
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Image Carousel
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

    // Dropdown Menu Fix
    const dropdown = document.querySelector(".dropdown .dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Remove this if needed
        dropdownContent.classList.toggle("show-dropdown");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove("show-dropdown");
        }
    });
});
