document.addEventListener('DOMContentLoaded', () => {
  const removeButtons = document.querySelectorAll('.remove-btn');
  const buyButtons = document.querySelectorAll('.buy-btn');
  const orderButton = document.querySelector('.order-btn');

  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      product.remove();
    });
  });

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Item purchased successfully!');
    });
  });

  orderButton.addEventListener('click', () => {
    alert('Order placed successfully!');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");
});
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});