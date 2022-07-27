function populateTodoList(todoObj) {
  const todolist = document.getElementById("todolist");
  
  const todoHeading = document.createElement('div');
  todoHeading.style.display = "flex"
  todoHeading.style.justifyContent = "space-between"
  const titleHeading = document.createElement('h3');
  titleHeading.textContent = "To Do";
  const descriptionHeading = document.createElement('h3');
  descriptionHeading.textContent = "Description"
  const dueDateHeading = document.createElement('h3');
  dueDateHeading.textContent = "Due Date"

  todoHeading.appendChild(titleHeading)
  todoHeading.appendChild(descriptionHeading)
  todoHeading.appendChild(dueDateHeading)
  todolist.appendChild(todoHeading);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv")
  const titleDiv = document.createElement("div");
  titleDiv.classList.add('todoTitle')
  const title = document.createElement("h4");
  title.innerText = todoObj["title"];
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add('descriptiondiv');
  const description = document.createElement("p");
  description.innerText = todoObj["description"];
  const dueDateDiv = document.createElement("div");
  dueDateDiv.classList.add('dueDateDiv')
  dueDateDiv.innerHTML = todoObj["dueDate"];

  titleDiv.appendChild(title);
  descriptionDiv.appendChild(description);
  todoDiv.appendChild(titleDiv);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild(dueDateDiv);
  todolist.appendChild(todoDiv);
}
export {populateTodoList}