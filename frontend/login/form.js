document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  if (!form) return;

  const formType = form.dataset.type; // 'signup' or 'login'
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validate based on form type
    const isValid = validateForm(form, formType);
    if (!isValid) return;

    // Collect form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value.trim();
    });

    // API endpoint (test)
    const apiUrl = "http://localhost:3000/healthcircuit/signup";
    // const apiUrl = "https://postman-echo.com/post";

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (formType === "signup") {
        successMessage.textContent = "Sign-up successful!";
        successMessage.style.color = "green";
        form.reset();
      } else if (formType === "login") {
        successMessage.textContent = "Login successful! Redirecting...";
        successMessage.style.color = "green";
        setTimeout(() => {
          window.location.href = "/frontend/admin/all-articles.html";
        }, 1500);
      }
    } catch (err) {
      console.error("Request failed:", err);
      successMessage.textContent = "Something went wrong.";
      successMessage.style.color = "red";
    }
  });
});

function validateForm(form, type) {
  let isValid = true;
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    const error = input.nextElementSibling;
    const value = input.value.trim();
    error.textContent = "";
    input.classList.remove("invalid");

    if (!value) {
      error.textContent = `${input.name} is required`;
      input.classList.add("invalid");
      isValid = false;
    } else if (input.name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      error.textContent = "Invalid email format";
      input.classList.add("invalid");
      isValid = false;
    } else if (input.name === "password" && value.length < 6) {
      error.textContent = "Password must be at least 6 characters";
      input.classList.add("invalid");
      isValid = false;
    }
  });

  return isValid;
}
