const addTaks = document.getElementById("task-form")
const addMensage = document.getElementById("task-list")

addTaks.addEventListener("submit", (event) => {
    event.preventDefault();
    const taks = document.getElementById("task-input")
    const newTask = document.createElement("li")
    newTask.innerHTML = `
        ${taks.value}
        <span class="delete-btn">❌</span>
        <span class="edit-btn">✏️</span>
    `;
    console.log(taks.value)
    addMensage.appendChild(newTask)
})

