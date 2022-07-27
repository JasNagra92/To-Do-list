import './style.css';
import {ShowTodoForm,ShowPrjForm} from "./form.js";

const ToDoBtn = document.getElementById('OpenTodoForm');
ToDoBtn.addEventListener('click', function(){ShowTodoForm()})

const PrjBtn = document.getElementById('OpenPrjForm');
PrjBtn.addEventListener('click', function(){ShowPrjForm()})