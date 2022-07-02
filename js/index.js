const tasks = []; 

// create new div, input(checkbox) and label
const newTask= document.getElementById('newTask');
const taskList = document.getElementById('taskList');

const div = [];
const input = [];
const label = [];

function lastIndex(array){
    return array[array.length-1];
}

function addTask() {
    div.push(document.createElement('div'));
    input.push(document.createElement('input'));
    label.push(document.createElement('label'));

    lastIndex(input).type = 'checkbox';
    lastIndex(label).textContent = newTask.value;

    lastIndex(div).appendChild(lastIndex(input));
    lastIndex(div).appendChild(lastIndex(label));
    taskList.insertBefore(lastIndex(div), taskList.firstElementChild);
}

const submit = document.getElementById('submit');
submit.addEventListener('click', addTask);