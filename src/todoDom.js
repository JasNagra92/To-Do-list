function populateTodoList(todoObj) {
  const todolist = document.getElementById("todolist");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv")
  const titleDiv = document.createElement("div");
  titleDiv.classList.add('todoTitle')
  const title = document.createElement("h4");
  title.innerText = todoObj["title"];
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add('descriptiondiv')
  const description = document.createElement("p");
  description.innerText = todoObj["description"];
  const dueDateDiv = document.createElement("div");
  dueDateDiv.innerHTML = todoObj["dueDate"];

  titleDiv.appendChild(title);
  descriptionDiv.appendChild(description);
  todoDiv.appendChild(titleDiv);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild.dueDateDiv;
  todolist.appendChild(todoDiv);
}
export {populateTodoList}