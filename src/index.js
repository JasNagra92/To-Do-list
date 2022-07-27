import './style.css';
import {ShowTodoForm,ShowPrjForm,HidePrjForm,HideTodoForm,getToDoData} from "./ShowForms";

const ToDoBtn = document.getElementById('OpenTodoForm');
ToDoBtn.addEventListener('click', function(){
    HidePrjForm();
    ShowTodoForm()
})

const PrjBtn = document.getElementById('OpenPrjForm');
PrjBtn.addEventListener('click', function(){
    HideTodoForm();
    ShowPrjForm()
})

const generateToDoBtn = document.getElementById("generateTodo");
generateToDoBtn.addEventListener('click',function(){
    let tdobj = getToDoData()
    console.log(tdobj)
})
