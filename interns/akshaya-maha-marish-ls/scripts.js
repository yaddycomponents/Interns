let todos = [];
let filter = "all";

// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function writeTodos(filterType=filter) {
    const filteredTodos=todos.filter(item => {
        if(filterType=='active') return !item.completed;
        if(filterType=='completed') return item.completed;
        return true;
    });

  if (filteredTodos.length === 0) {
    todoList.innerHTML = `<div>No todos to show</div>`;
    return;
  }

  const todosHTML = filteredTodos.map(
    (item) =>
      `<li class="${item.completed ? "completed" : ""}">
    <input type='checkbox' onclick="checkItem(${item.id})"/>
    <span>${item.text}<span>
    <button class="edit-btn" onclick="editItem(${item.id})">Edit</button>
     <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>`,
  ).join("");
  console.log(todosHTML);
  todoList.innerHTML = todosHTML;
}


function addToLocalStorage(todos){
    localStorage.setItem('todos',JSON.stringify(todos));

}

function deleteItem(id) {
  todos = todos.filter((item) => item.id !== id);
  writeTodos();
  addToLocalStorage(todos);
}

function checkItem(id) {
  const todoslistMap = todos.find((item) => item.id === id);

  if (todoslistMap) {
    todoslistMap.completed = !todoslistMap.completed;
  }
  writeTodos();
  addToLocalStorage(todos);
}

function editItem(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  const newText = prompt("Edit your todo:", todo.text);
  if (newText !== null && newText.trim() !== "") {
    todo.text = newText.trim();
    addToLocalStorage(todos);
    writeTodos();
  }
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
  addToLocalStorage(todos);
  console.log(todos);
});

const filterButtons=document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {
    button.addEventListener('click',function() {
        filter=this.dataset.filter;
        writeTodos();
    });
});

const themeButton = document.getElementsByClassName("theme-toggle")[0];
console.log("themeButton", themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
      themeButton.innerText='☀️'
    }
    else{
      themeButton.innerText='🌙'
    }
})

window.addEventListener("DOMContentLoaded", () => {
    const savedTodos=localStorage.getItem('todos');
    if(savedTodos){
        todos=JSON.parse(savedTodos);
    }
  writeTodos();
});
