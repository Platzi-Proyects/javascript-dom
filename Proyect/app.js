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
    addMensage.appendChild(newTask)
})

addMensage.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        console.log(event.target.parentElement)
        event.target.parentElement.remove();
    }

    if (event.target.classList.contains("edit-btn")) {
        console.log(event.target.parentElement)
        const newName = prompt()
        event.target.parentElement.childNodes[0].textContent = newName
    }
})


