document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
