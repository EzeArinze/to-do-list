document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("todo-input");
  const addButton = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  // Function to create a new to-do item
  function createTodoItem(text) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
    <span class="todo-text">${text}</span>
    <div><button class="edit-btn">Edit</button>
<button class="delete-btn">Delete</button></div>
  `;
    todoList.appendChild(todoItem);

    // Attach delete functionality
    todoItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        todoItem.remove();
      });

    // Attach edit functionality
    const todoText = todoItem.querySelector(".todo-text");
    const editButton = todoItem.querySelector(".edit-btn");
    editButton.addEventListener("click", function () {
      const newText = prompt("Enter new text:", todoText.textContent);
      if (newText !== null) {
        todoText.textContent = newText;
      }
    });
  }

  // Event listener for adding a new to-do item
  addButton.addEventListener("click", function () {
    if (inputField.value.trim() !== "") {
      createTodoItem(inputField.value.trim());
      inputField.value = "";
    }
  });
});
