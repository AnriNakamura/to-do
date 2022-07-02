const tasks = []; 

// add task
//const newTask= document.getElementById('newTask');
//const taskList = document.getElementById('taskList');
//const ul = document.createElement('ul');
//const li = [];

// create new div, input(checkbox) and label
const newTask= document.getElementById('newTask');
const taskList = document.getElementById('taskList');

const div = [];
const input = [];
const label = [];

function lastIndex(array){
    return array[array.length-1];
}

function hoge() {
    div.push(document.createElement('div'));
    input.push(document.createElement('input'));
    label.push(document.createElement('label'));
}

function hogeInfo() {
    lastIndex(input).type = 'checkbox';
    lastIndex(label).textContent = newTask.value;
}

function hogeAdd() {
    lastIndex(div).appendChild(lastIndex(input));
    lastIndex(div).appendChild(lastIndex(label));
    taskList.insertBefore(lastIndex(div), taskList.firstElementChild);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', hoge);
submit.addEventListener('click', hogeInfo);
submit.addEventListener('click', hogeAdd);