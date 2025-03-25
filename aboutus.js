let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector(".carousel");
    const totalSlides = document.querySelectorAll(".carousel-slide").length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Navbar Toggle for Mobile
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

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
