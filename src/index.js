import './style.css';
import {ShowTodoForm,ShowPrjForm,HidePrjForm,HideTodoForm} from "./form.js";

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