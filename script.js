// For now, just prevent default form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your message! (Hook this up to email service)");
  });
  