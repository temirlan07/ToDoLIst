const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = document.createElement("li");
    task.classList.add("task");

    const text = document.createElement("span");
    text.classList.add("task-text");
    text.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Удалить";

    text.addEventListener("click", function () {
        text.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(task);
        updateEmptyMessage();
    });

    task.appendChild(text);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = "";
    updateEmptyMessage();
}

function updateEmptyMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") addTask();
});

updateEmptyMessage();
