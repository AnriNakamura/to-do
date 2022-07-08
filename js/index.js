// get input and list
const newTask= document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// element lists
const div = [];
const input = [];
const label = [];

// get last value of array
const lastIndex = (array) => array[array.length-1];

// add new task
const submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // create element
    div.push(document.createElement('div'));
    input.push(document.createElement('input'));
    label.push(document.createElement('label'));
    // add info of task
    lastIndex(input).type = 'checkbox';
    lastIndex(label).textContent = newTask.value;
    // show task
    lastIndex(div).appendChild(lastIndex(input));
    lastIndex(div).appendChild(lastIndex(label));
    taskList.insertBefore(lastIndex(div), taskList.firstElementChild);
});
