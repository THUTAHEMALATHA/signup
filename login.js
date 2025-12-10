// login.js
import { navbar } from "./navbar.js";
import { footer } from "./footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

const form = document.getElementById("login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const stored = localStorage.getItem("user");
  if (!stored) {
    alert("No user found, please signup first.");
    return;
  }

  const user = JSON.parse(stored);

  if (user.email === email && user.password === password) {
    localStorage.setItem("isAuth", "true");
    alert("Login successful.");
    window.location.href = "./todos.html";
  } else {
    alert("Invalid credentials.");
  }
});
