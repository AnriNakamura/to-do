// receive input
const taskList = [];    // list of tasks

function output() {
    taskList.push(newTask.value); // add task
    out01.innerText = 'Your input: ' + taskList[taskList.length -1];
    out02.innerText = 'Task number is ' + taskList.length;
}

const newTask = document.getElementById('newTask');
const submit = document.getElementById('submit');
const out01 = document.getElementById('out01');
const out02 = document.getElementById('out02');

submit.addEventListener('click', output);