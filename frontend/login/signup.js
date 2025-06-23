const form = document.getElementById("signupForm");
const msg = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    fullname: form.username.value,
    email: form.email.value,
    phoneNumber: form.phoneNo.value,
    password: form.password.value,
    confirmPassword: form.confirmPassword.value,
  };

  try {
    const res = await fetch("http://35.180.152.86:3000/healthcircuit/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    console.log(result); // for debugging

    if (res.ok) {
      msg.textContent = "Signup successful! Redirecting to login...";
      msg.style.color = "green";

      setTimeout(() => {
        window.location.href = "/admin.html";
      }, 1500);
    } else {
      msg.textContent = result.message || "Signup failed.";
      msg.style.color = "red";
    }
  } catch (err) {
    console.error("Network or server error:", err);
    msg.textContent = "Server error. Please try again later.";
    msg.style.color = "red";
  }
});
