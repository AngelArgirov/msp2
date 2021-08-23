function sendMail(contactForm) {
    emailjs.send("service_q9bmryy", "template_vu82alo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "Submit": contactForm.mess.value
    })
        .then(
            function (response) {
                console.log("THANK YOU ! YOUR MESSAGE HAS BEEN SENT SUCCESFULLY !", response);
                let form = document.getElementById("form");
                form.reset();
            },
            function (error) {
                console.log("FAILED ! PLEASE TRY AGAIN !", error);
            }
        );
    return false;
}
