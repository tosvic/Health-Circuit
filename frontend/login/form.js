document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  if (signupForm) {
    handleSignup(signupForm);
  }

  if (loginForm) {
    handleLogin(loginForm);
  }
});

function handleSignup(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // if (!validateForm(data)) return;

    try {
      const res = await fetch("https://postman-echo.com/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
      alert("Sign up successful!");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed");
    }
  });
}

function handleLogin(form) {
  const responseBox = document.getElementById("responseMessage");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // if (!validateForm(data)) return;

    try {
      const res = await fetch("https://postman-echo.com/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
      responseBox.textContent = "Login successful! Redirecting...";
      responseBox.style.color = "green";

      setTimeout(() => {
        window.location.href = "/frontend/admin/all-articles.html";
      }, 1500);
    } catch (err) {
      console.error("Login error:", err);
      responseBox.textContent = "Login failed. Try again.";
      responseBox.style.color = "red";
    }
  });
}

// function validateForm(data) {
//   for (const key in data) {
//     if (!data[key]) {
//       alert(`Please enter your ${key}`);
//       return false;
//     }
//   }
//   return true;
// }
