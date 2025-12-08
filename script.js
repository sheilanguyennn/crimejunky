// --- Simple Form Validation ----

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  const messageBox = document.querySelector("#formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (name === "" || email === "" || message === "") {
        messageBox.textContent = "Please fill out all required fields.";
        messageBox.className = "error";
        return;
      }

      // simple email check
      if (!email.includes("@")) {
        messageBox.textContent = "Please enter a valid email address.";
        messageBox.className = "error";
        return;
      }

      // success
      messageBox.textContent = "Thank you! Your message has been sent.";
      messageBox.className = "success";

      form.reset();
    });
  }
});
