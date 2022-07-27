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
export { ToDoGenerator, ProjectGenerator };
