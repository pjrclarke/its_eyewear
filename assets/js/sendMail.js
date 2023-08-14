function sendMail(contactForm) {
    emailjs.send("gmail", "eyewear", {
        "from_name": contactForm.fullName.value,
        "message": contactForm.message.value,
        "from_email": contactForm.email.value
    })
        .then(function (response) {
            console.log("Email sent successfully:", response);
        }, function (error) {
            console.log("Email sending failed:", error);
        });
}