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
