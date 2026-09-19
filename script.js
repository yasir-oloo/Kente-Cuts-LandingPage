// Kente Cuts – plain JavaScript interactions

document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile navigation toggle ---
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- Contact form validation (required JS interaction) ---
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  function showError(input, errorEl, message) {
    input.classList.add("invalid");
    errorEl.textContent = message;
  }

  function clearError(input, errorEl) {
    input.classList.remove("invalid");
    errorEl.textContent = "";
  }

  function isValidEmail(value) {
    // Simple practical email check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let valid = true;

      // Reset previous state
      clearError(nameInput, nameError);
      clearError(emailInput, emailError);
      clearError(messageInput, messageError);
      formSuccess.hidden = true;

      // Name
      if (!nameInput.value.trim()) {
        showError(nameInput, nameError, "Please enter your name.");
        valid = false;
      }

      // Email
      if (!emailInput.value.trim()) {
        showError(emailInput, emailError, "Please enter your email.");
        valid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        valid = false;
      }

      // Message
      if (!messageInput.value.trim()) {
        showError(messageInput, messageError, "Please write a short message.");
        valid = false;
      }

      if (valid) {
        // Demo success – no real backend
        formSuccess.hidden = false;
        form.reset();
        // Optional: scroll success into view
        formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    // Clear error on input
    [nameInput, emailInput, messageInput].forEach(function (input) {
      input.addEventListener("input", function () {
        const errorId = input.id + "Error";
        const errorEl = document.getElementById(errorId);
        if (errorEl) clearError(input, errorEl);
      });
    });
  }
});
