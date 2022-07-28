import {populateTodoList} from "./todoDom"
function ToDoGenerator(title, description, dueDate) {
  class ToDo {
    constructor(title, description, dueDate) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
    }
  }
  const ToDoObj = new ToDo(title, description, dueDate);
  return ToDoObj;
}

function ProjectGenerator(title) {
  class Project {
    constructor(title) {
      this.title = title;
      this.inDisplay = false
    }
  }
  const project = new Project(title);
  return project;
}

function ToDoExtractor(prjobj){
    let tempArray = Object.values(prjobj)
    tempArray.forEach(item => {
        if (typeof item == "object"){
            populateTodoList(item)
        }
    })
}

export { ToDoGenerator, ProjectGenerator, ToDoExtractor, findProject };
