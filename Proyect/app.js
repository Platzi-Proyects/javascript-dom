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
    let newId = localStorage.length
    toLocal(newId,taks.value)
})

addMensage.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        const key = li.dataset.key; // 👈 aquí tienes tu key

        localStorage.removeItem(key);
        li.remove();
    }

    if (event.target.classList.contains("edit-btn")) {
        console.log(event.target.parentElement)
        const newName = prompt()
        const li = event.target.parentElement
        const key = li.dataset.key
        localStorage.setItem(key,newName)
        event.target.parentElement.childNodes[0].textContent = newName
    }

})

function toLocal(i,data){
    localStorage.setItem(i, data);
}

function localLoad(){
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let data = localStorage.getItem(key);

        const loadTaks = document.createElement("li")
        loadTaks.dataset.key = key; // 👈 guardamos la key en el li

        loadTaks.innerHTML = `
            ${data}
            <span class="delete-btn">❌</span>
            <span class="edit-btn">✏️</span>
        `;

        addMensage.appendChild(loadTaks);
    }
}



localLoad()




