// ===============================
// Seleccionar elementos del DOM
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// ===============================
// Guardar tareas en LocalStorage
// ===============================

function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList li span").forEach((task) => {
        tasks.push(task.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===============================
// Crear tarea
// ===============================

function createTaskElement(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

// ===============================
// Añadir tarea
// ===============================

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    createTaskElement(taskText);

    saveTasks();

    taskInput.value = "";
    taskInput.focus();
}

// ===============================
// Cargar tareas guardadas
// ===============================

function loadTasks() {
    const savedTasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach((task) => {
        createTaskElement(task);
    });
}

// ===============================
// Eventos
// ===============================

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

document.addEventListener("DOMContentLoaded", loadTasks);