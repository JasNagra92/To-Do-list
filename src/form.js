const HiddenFormDiv = document.getElementById("HiddenFormDiv");
const HiddenPrjDiv = document.getElementById("HiddenPrjDiv");


function ShowTodoForm(){
    HiddenFormDiv.style.display = 'block'
}
function ShowPrjForm(){
    HiddenPrjDiv.style.display = "block"
}
function HideTodoForm(){
    HiddenFormDiv.style.display = "none"
}
function HidePrjForm(){
    HiddenPrjDiv.style.display = "none"
}
export{ShowPrjForm, ShowTodoForm}