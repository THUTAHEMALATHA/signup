// signup.js
import { navbar } from "./navbar.js";
import { footer } from "./footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const user = { email, password };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful, go to login page.");
  form.reset();
});
