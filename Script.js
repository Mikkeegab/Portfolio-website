// Simple form submission message
Document.getElementById(“contactForm”).addEventListener(“submit”, function(event) {
    Event.preventDefault();
    Alert(“Thank you for your message! I’ll get back to you soon.”);
    Document.getElementById(“contactForm”).reset();
});


