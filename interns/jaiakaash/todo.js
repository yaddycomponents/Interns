let todos = [];
let currentFilter = "";
// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function writeTodos() {
  let filteredTodos = todos;
    if (currentFilter === "all"){
        filteredTodos = todos;
    }
  else if (currentFilter === "completed") {
    filteredTodos = todos.filter(todo => todo.completed);
  } else if (currentFilter === "active") {
    filteredTodos = todos.filter(todo => !todo.completed);
  }

  if (filteredTodos.length === 0) {
    todoList.innerHTML = `<li>No tasks to show</li>`;
    return;
  }

  todoList.innerHTML = filteredTodos
    .map(
      (item) => `
        <li class="${item.completed ? "completed" : ""}">
          <input 
            type="checkbox" 
            ${item.completed ? "checked" : ""}
            onclick="checkItem(${item.id})"
          />
          <span>${item.text}</span>
          <button onclick="editItem(${item.id})">Edit</button>
          <button class="delete-btn" onclick="deleteItem(${item.id})">
            Delete
          </button>
        </li>
      `
    )
    .join("");
}


function deleteItem(id) {
  todos = todos.filter((item) => item.id !== id);
  writeTodos();
}
function editItem(id){
    const item = todos.find((item) => item.id === id);
    const newText = prompt("Edit todo:", item.text);
  if (newText === null) return; 
  item.text = newText.trim();
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
});

const themeButton = document.getElementsByClassName("theme-toggle")[0];


themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
})



const allBtn = document.querySelector(".filter-btn-all");

allBtn.addEventListener("click", () => {
  currentFilter = "all";
  writeTodos();
});


const activeBtn = document.querySelector(".filter-btn-active");

activeBtn.addEventListener("click", () => {
  currentFilter = "active";
  writeTodos();
});



const completedBtn = document.querySelector(".filter-btn-completed");

completedBtn.addEventListener("click", () => {
  currentFilter = "completed";
  writeTodos();
});

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

searchBtn.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchInput.focus();
});


searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let html = "";

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].text.toLowerCase().includes(query)) {
      html += `
        <li class="${todos[i].completed ? "completed" : ""}">
          <input type="checkbox" ${
            todos[i].completed ? "checked" : ""
          } onclick="checkItem(${todos[i].id})" />
          <span>${todos[i].text}</span>
          <button onclick="editItem(${todos[i].id})">Edit</button>
          <button class="delete-btn" onclick="deleteItem(${todos[i].id})">
            Delete
          </button>
        </li>
      `;
    }
  }

  if (html === "") {
    todoList.innerHTML = "<li>No matching tasks</li>";
  } else {
    todoList.innerHTML = html;
  }
});


window.addEventListener("DOMContentLoaded", () => {
  writeTodos();
});
