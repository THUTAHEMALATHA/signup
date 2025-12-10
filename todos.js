// todos.js
import { navbar } from "./navbar.js";
import { footer } from "./footer.js";
import { displayTodos } from "./displayTodos.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

// protect route
const isAuth = localStorage.getItem("isAuth");
if (isAuth !== "true") {
  alert("Please login first.");
  window.location.href = "./login.html";
}

// fetch todos
const URL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
  try {
    const res = await fetch(URL); // returns array with userId,id,title,completed[web:15][web:17]
    const data = await res.json();
    displayTodos(data);
  } catch (err) {
    console.log(err);
  }
}

getTodos();
