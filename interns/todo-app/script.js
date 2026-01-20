let todos = [];
let filter = "all";

// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function writeTodos() {
  if (todos.length === 0) {
    todos.innerHTML = `<div>No todos to show</div>`;
  }

  const todosHTML = todos.map(
    (item) =>
      `<li class="${item.completed ? "completed" : ""}"><input type='checkbox' onclick="checkItem(${item.id})"/><span>${item.text}<span> <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>`,
  );
  console.log(todosHTML);
  todoList.innerHTML = todosHTML;
}

function deleteItem(id) {
  todos = todos.filter((item) => item.id !== id);
  writeTodos();
}

function checkItem(id) {
  const todoslistMap = todos.find((item) => item.id === id);

  if (todoslistMap) {
    todoslistMap.completed = !todoslistMap.completed;
  }
  writeTodos();
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = todoInput.value.trim();
  todoInput.value = "";
  todos.unshift({
    id: Date.now(),
    text: text,
    completed: false,
  });
  writeTodos();
  console.log(todos);
});

const themeButton = document.getElementsByClassName("theme-toggle")[0];
console.log("themeButton", themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
})

window.addEventListener("DOMContentLoaded", () => {
  writeTodos();
});
