let todos = [];
let filter = "all";
let todosActive = [];
let todosCompleted = [];
// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function writeTodos(todosVar) {
  if (todosVar.length === 0) {
    todoList.innerHTML = `<div>No todos to show</div>`;
    return;
  }

  const todosHTML = todosVar.map(
    (item) =>
      `<li class="${item.completed ? "completed" : ""}"><input type='checkbox' onclick="checkItem(${item.id})"/><span>${item.text}<span> <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button><button class = "edit" onclick = "editItem(${item.id}">Edit</button>`,
  );
  console.log(todosHTML);
  todoList.innerHTML = todosHTML;
}

function editItem(id){
  let todoeEdit = todos.find((item) => item.id === id);
  let Text = todoInput.value.trim();
  todoeEdit.text = Text;
}

function deleteItem(id) {
  todos = todos.filter((item) => item.id !== id);
  writeTodos(todos);
}

function checkItem(id) {
  const todoslistMap = todos.find((item) => item.id === id);

  if (todoslistMap) {
    todoslistMap.completed = !todoslistMap.completed;
  }
  writeTodos(todos);
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
  writeTodos(todos);
  console.log(todos);
});

const themeButton = document.getElementsByClassName("theme-toggle")[0];
console.log("themeButton", themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
    if(document.getElementById("theme-toggle").innerHTML == "🌙"){
    document.getElementById("theme-toggle").innerHTML = "☀️";
    }
  else{
    document.getElementById("theme-toggle").innerHTML = "🌙";
  }
})

window.addEventListener("DOMContentLoaded", () => {
  writeTodos(todos);
});

const allButton = document.getElementsByClassName("filter-btn all")[0];
allButton.addEventListener("click", () => {
  writeTodos(todos);
})

const activeButton = document.getElementsByClassName("filter-btn active")[0];

activeButton.addEventListener("click", () => {
  todosActive = todos.filter((item) => item.completed == false);
  writeTodos(todosActive);
})

const completedButton = document.getElementsByClassName("filter-btn completed")[0];

completedButton.addEventListener("click", () => {
  todosCompleted = todos.filter((item) => item.completed == true);
  writeTodos(todosCompleted);
})

