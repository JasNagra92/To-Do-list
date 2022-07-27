import './style.css';
import {ShowTodoForm,ShowPrjForm,HidePrjForm,HideTodoForm,getToDoData, getPrjData} from "./ShowForms";
import {prjtodocombiner} from "./prjtodocombiner"

let globalPrjStorage = {}

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
    let tdobj = getToDoData();
    prjtodocombiner(globalPrjStorage.prj,tdobj);
    console.log(globalObjPrjStorage.prj)
    
})

const generatePrjBtn = document.getElementById('generatePrj');
generatePrjBtn.addEventListener('click', function(){
    let prj = getPrjData();
    globalPrjStorage.prj = prj
})
