import {ToDoGenerator} from "./ToDoModule"

const HiddenFormDiv = document.getElementById("HiddenFormDiv");
const HiddenPrjDiv = document.getElementById("HiddenPrjDiv");

function ShowTodoForm() {
  HiddenFormDiv.style.display = "block";
}
function ShowPrjForm() {
  HiddenPrjDiv.style.display = "block";
}
function HideTodoForm() {
  HiddenFormDiv.style.display = "none";
}
function HidePrjForm() {
  HiddenPrjDiv.style.display = "none";
}

function getToDoData() {
  let title = document.getElementById("Todotitle").value;
  let description = document.getElementById("TodoDescription").value;
  let dueDate = document.getElementById("DueDate").value;
  let obj = ToDoGenerator(title,description,dueDate);
  return obj
}

export { ShowPrjForm, ShowTodoForm, HideTodoForm, HidePrjForm, getToDoData };
