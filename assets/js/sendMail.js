function sendMail(contactForm) {
    emailjs.send("service_9dqbr89", "template_gn8jt35", {
        "from_name": contactForm.fullName.value,
        "message": contactForm.message.value,
        "from_email": contactForm.email.value
    })
    .then(function(response) {
        console.log("Email sent successfully:", response);
        // Hide the form
        document.getElementById("contactForm").style.display = "none";
        // Show the thank-you message
        document.getElementById("thankYouMessage").style.display = "block";
    }, function(error) {
        console.log("Email sending failed:", error);
    });
    return false;
}