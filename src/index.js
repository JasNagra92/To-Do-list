import "./style.css";
import {
  ShowTodoForm,
  ShowPrjForm,
  HidePrjForm,
  HideTodoForm,
  getToDoData,
  getPrjData,
} from "./ShowForms";
import { prjtodocombiner } from "./prjtodocombiner";
import { populateSidebar } from "./sideBarDom";
import {
  populateTodoList,
  createToDoHeadings,
  clearToDoDisplay,
} from "./todoDom";
import { ToDoExtractor } from "./ToDoModule";

createToDoHeadings();
let globalPrjStorage = [];
let activeProject;

const sideBar = document.getElementById("sidebar");
sideBar.addEventListener("click", function (e) {
  if (e.target.nodeName == "H4") {
    let selectedPrj = e.target.id;
    activeProject = selectedPrj;
    let displayedPrj = globalPrjStorage.find((prj) => prj.title == selectedPrj);
    clearToDoDisplay();
    ToDoExtractor(displayedPrj);
  }
});

const ToDoBtn = document.getElementById("OpenTodoForm");
ToDoBtn.addEventListener("click", function () {
  HidePrjForm();
  ShowTodoForm();
});

const PrjBtn = document.getElementById("OpenPrjForm");
PrjBtn.addEventListener("click", function () {
  HideTodoForm();
  ShowPrjForm();
});

const generateToDoBtn = document.getElementById("generateTodo");
generateToDoBtn.addEventListener("click", function () {
  let tdobj = getToDoData();
  let prj = globalPrjStorage.find((prj) => prj.title == activeProject);
  prjtodocombiner(prj, tdobj);
  populateTodoList(tdobj);
  document.forms["todoForm"].reset();
  HideTodoForm();
});

const generatePrjBtn = document.getElementById("generatePrj");
generatePrjBtn.addEventListener("click", function () {
  let prj = getPrjData();
  globalPrjStorage.push(prj);
  activeProject = prj.title;
  globalPrjStorage.forEach((prj) => {
    if (prj.inDisplay == false) {
      populateSidebar(prj);
      prj.inDisplay = true;
    }
  });
  document.forms["prjForm"].reset();
  HidePrjForm();
});
