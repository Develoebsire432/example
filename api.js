document.addEventListener('DOMContentLoaded', function () {
  const sendButton = document.getElementById('sendButton');
  sendButton.addEventListener('click', sendEmail);
});

function sendEmail() {
  const emailInput = document.getElementById('emailInput').value;
  if (validateEmail(emailInput) && grecaptcha.getResponse() !== '') {
    // Replace the following line with your actual email sending code or API call
    alert(`Email sent to: ${emailInput}`);
  } else {
    alert('Please enter a valid email and complete the CAPTCHA.');
  }
}

function validateEmail(email) {
  // Basic email validation (not a full-proof validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
