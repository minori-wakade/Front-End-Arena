document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");
});
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
document.querySelector(".confirm-btn:nth-child(1)").addEventListener("click", function() {
  alert("Edit Details clicked!");
});

document.querySelector(".confirm-btn:nth-child(2)").addEventListener("click", function() {
  alert("Details Confirmed!");
});