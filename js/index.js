const taskList = [];                // list of tasks

// add task and show info of task
function addTask() {
    taskList.push(newTask.value);   // add task
    out01.innerText = 'Your input: ' + taskList[taskList.length -1];
    out02.innerText = 'Task number is ' + taskList.length;
}

// show all task
function show() {
    out03.innerText = taskList;
}

const newTask = document.getElementById('newTask');
const submit = document.getElementById('submit');
const showList = document.getElementById('showList');
const out01 = document.getElementById('out01');
const out02 = document.getElementById('out02');
const out03 = document.getElementById('out03');

submit.addEventListener('click', addTask);
showList.addEventListener('click', show);