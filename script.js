function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const confirmation = document.getElementById("confirmation");

    document.getElementById("submitForm").addEventListener("click", function () {
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        // Display a confirmation message
        confirmation.innerHTML = "Thank you for your message! We will get back to you soon.";

        // Clear the form fields
        form.reset();
    });
});
