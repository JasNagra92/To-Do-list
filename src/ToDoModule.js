function ToDoGenerator(title,description,dueDate){
class ToDo {
    constructor(title,description,dueDate){
        this.title = title
        this.description = description
        this.dueDate = dueDate
    }
}
const ToDoObj = new ToDo(title,description,dueDate);
return ToDoObj
}
export{ToDoGenerator}