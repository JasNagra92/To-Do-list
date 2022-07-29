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
import { storePrj, populateFromStorage } from "./storagemodule";

createToDoHeadings();
let globalPrjStorage = [];
if ("globalArray" in localStorage) {
  globalPrjStorage = populateFromStorage(globalPrjStorage);
  globalPrjStorage.forEach((prj) => {
    populateSidebar(prj);
    prj.inDisplay = true;
  });
  ToDoExtractor(globalPrjStorage[0]);
}
let activeProject;

const sideBar = document.getElementById("sidebar");
sideBar.addEventListener("click", function (e) {
  if (e.target.nodeName == "H4") {
    let selectedPrj = e.target.id;
    activeProject = selectedPrj;
    let displayedPrj = globalPrjStorage.find((prj) => prj.title == selectedPrj);
    clearToDoDisplay();
    createToDoHeadings();
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
  clearToDoDisplay();
  createToDoHeadings();
  let prj = globalPrjStorage.find((prj) => prj.title == activeProject);
  prjtodocombiner(prj, tdobj);
  storePrj(globalPrjStorage);
  populateTodoList(tdobj);
  document.forms["todoForm"].reset();
  HideTodoForm();
});

const generatePrjBtn = document.getElementById("generatePrj");
generatePrjBtn.addEventListener("click", function () {
  let prj = getPrjData();
  globalPrjStorage.push(prj);
  storePrj(globalPrjStorage);
  console.log(globalPrjStorage);
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
