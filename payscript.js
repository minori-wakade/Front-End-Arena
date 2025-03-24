// Toggle Order Summary Visibility
function toggleSummary() {
    const summary = document.getElementById('summary');
    const arrow = document.getElementById('arrow');
    const isHidden = summary.style.display === 'block';
  
    if (isHidden) {
      summary.style.display = 'none';
      arrow.textContent = '▼';
    } else {
      summary.style.display = 'block';
      arrow.textContent = '▲';
    }
  }
 // Function to handle selection of payment mode
function selectPaymentMode(mode) {
    // Remove the 'selected' class from all options
    let options = document.querySelectorAll('.payment-option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Add 'selected' class to the clicked payment option
    let selectedOption = Array.from(options).find(option => option.querySelector('span').textContent.trim() === mode);
    selectedOption.classList.add('selected');
  }
  
  // Function to show the popup when payment is confirmed
// Function to show the message when payment is confirmed
function confirmPayment() {
    alert("Order Confirmed!");
  }
  
  // Add event listener to Confirm Payment button
  document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.querySelector('.confirm-payment-btn');
    confirmButton.addEventListener('click', confirmPayment);
  });
  
  
  // Function to close the popup
  function closePopup() {
    // Hide the popup
    document.getElementById('popup').classList.add('hidden');
  }
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});