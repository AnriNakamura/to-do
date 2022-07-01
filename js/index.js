const taskList = [];                // list of tasks

// add task and show info of task
const taskName = document.createElement('p');
const taskNum = document.createElement('p');
const output = document.getElementById('output');

function addTask() {
    taskList.push(newTask.value);   // add task
    taskName.textContent = 'Your input: ' + newTask.value;
    taskNum.textContent = 'Task number is' + taskList.length;
    output.appendChild(taskName);
    output.appendChild(taskNum);
}

// show all task
function show() {
    out03.innerText = taskList;
}

const newTask = document.getElementById('newTask');
const submit = document.getElementById('submit');
const showList = document.getElementById('showList');
const out03 = document.getElementById('out03');

submit.addEventListener('click', addTask);
showList.addEventListener('click', show);