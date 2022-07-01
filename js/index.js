const tasks = []; 

// add task and show info of task
const newTask = document.getElementById('newTask');
const taskName = document.createElement('p');
const taskNum = document.createElement('p');
const taskInfo = document.getElementById('taskInfo');

function addTask() {
    tasks.push(newTask.value);
    taskName.textContent = 'Your input: ' + newTask.value;
    taskNum.textContent = 'Task number is ' + tasks.length;
    taskInfo.appendChild(taskName);
    taskInfo.appendChild(taskNum);
}

// show all task
const taskList = document.getElementById('taskList');
const ul = document.createElement('ul');

function show() {
    for (const task of tasks) {
        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);
    }
    taskList.appendChild(ul);
}


const submit = document.getElementById('submit');
const showList = document.getElementById('showList');

submit.addEventListener('click', addTask);
showList.addEventListener('click', show);