// displayTodos.js
export function displayTodos(data) {
  const container = document.getElementById("todos-container");
  container.innerHTML = "";

  data.forEach((todo) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.margin = "5px";
    div.style.padding = "5px";

    const title = document.createElement("p");
    title.textContent = todo.title;

    const status = document.createElement("p");
    status.textContent = todo.completed ? "Completed" : "Pending";

    div.append(title, status);
    container.appendChild(div);
  });
}
