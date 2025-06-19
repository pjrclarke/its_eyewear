function sendMail(contactForm) {
    emailjs.send("service_9dqbr89", "template_gn8jt35", {
        "from_name": contactForm.fullName.value,
        "message": contactForm.message.value,
        "from_email": contactForm.email.value
    })
    .then(function(response) {
        document.getElementById("contactForm").style.display = "none";
        document.getElementById("thankYouMessage").style.display = "block";
    }, function(error) {
   });
    return false;
}