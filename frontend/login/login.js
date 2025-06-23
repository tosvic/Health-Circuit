const form = document.getElementById("loginForm");
const msg = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loginData = {
    email: form.email.value,
    password: form.password.value,
  };

  try {
    const res = await fetch("http://35.180.152.86:3000/healthcircuit/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // No 'x-api-key'
      },
      body: JSON.stringify(loginData),
    });

    const result = await res.json();
    console.log("Response:", result);

    if (res.ok) {
      msg.textContent = "Login successful!";
      msg.style.color = "green";

      if (result.token) {
        localStorage.setItem("authToken", result.token);
      }

      setTimeout(() => {
        window.location.href = "/frontend/admin/all-articles.html";
      }, 1500);
    } else {
      msg.textContent = result.message || "Login failed.";
      msg.style.color = "red";
    }
  } catch (err) {
    console.error("Error:", err);
    msg.textContent = "Server error. Try again later.";
    msg.style.color = "red";
  }
});
