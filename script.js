// Obtener elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Función para añadir una tarea
function addTask() {
    const taskText = taskInput.value.trim();

    // Evitar tareas vacías
    if (taskText === "") {
        return;
    }

    // Crear elementos
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";
    deleteBtn.classList.add("delete-btn");

    // Eliminar tarea
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Añadir elementos al li
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Añadir tarea a la lista
    taskList.appendChild(li);

    // Limpiar input
    taskInput.value = "";
    taskInput.focus();
}

// Evento botón
addTaskBtn.addEventListener("click", addTask);

// Evento Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});