let todos = [];
let filter = "all";

// DOM Elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons=document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        filterButtons.forEach((b)=> b.classList.remove("active"));
        btn.classList.add("active");
        filter=btn.dataset.filter;
        writeTodos();
    });
});

function writeTodos() {
    let filteredTodos=todos;

    if(filter==="active"){
        filteredTodos=todos.filter((item)=> !item.completed);
    }
    else if(filter==="completed"){
        filteredTodos=todos.filter((item)=> item.completed);
    }

  if (filteredTodos.length === 0) {
    todoList.innerHTML = `<div class="empty-state">No todos to show</div>`;
    return;
  }

  const todosHTML = filteredTodos.map(
    (item) =>
      `<li class="${item.completed ? "completed" : ""}"><input type="checkbox" ${item.completed ? "checked" : ""} onclick="checkItem(${item.id})"/><span>${item.text}<span> 
    <button class="edit-btn" onclick="editItem(${item.id})">Edit</button> <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button></li>`
  );
  console.log(todosHTML);
  todoList.innerHTML = todosHTML.join("");
}

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

function editItem(id)
{
    const todo=todos.find(t=> t.id===id);
    if(!todo)
        return;
    const newText=prompt("Edit your task: ",todo.text);

    if(newText!==null && newText.trim()!== ""){
        todo.text=newText.trim();
        saveTodos();
        writeTodos();
    }
}

function deleteItem(id) {
  todos = todos.filter((item) => item.id !== id);
  saveTodos();
  writeTodos();
}

function checkItem(id) {
  const todoslistMap = todos.find((item) => item.id === id);

  if (todoslistMap) {
    todoslistMap.completed = !todoslistMap.completed;
    saveTodos();
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
  saveTodos();
  writeTodos();
  console.log(todos);
});

const themeButton = document.getElementsByClassName("theme-toggle")[0];
console.log("themeButton", themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle('dark-mode');
});

window.addEventListener("DOMContentLoaded", () => {
    const savedTodos=localStorage.getItem("todos");
    if(savedTodos){
        todos=JSON.parse(savedTodos);
    }
  writeTodos();
});
