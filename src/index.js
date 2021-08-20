const main = document.querySelector("#main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  // Have the user input
  const newTask = document.querySelector("#new-task-description").value
  // Slap it on the DOM
  taskList.innerHTML += `<li> ${newTask}</li>`
        // above is the same as below
  // const taskItem = document.createElement("li")
  // taskItem.innerText = newTask
  // taskList.appendChild(taskItem)
  taskForm.reset()
})
