// get input and list
const newTask= document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// element lists
const div = [];
const task = []; // list of things-to-do
const input = []; // list of input contents
const output = []; // list of output contents

// get last value of array
const lastIndex = (array) => array[array.length-1];

// place the cursor in newTask
newTask.focus();

// add new task
/*
const input = [];
const label = [];
newTask.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
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
    }
});
*/

newTask.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        // create element
        div.push(document.createElement('div'));
        task.push(newTask.value);
        input.push(document.createElement('span'));
        output.push(document.createElement('span'));
        // add info of task
        lastIndex(input).textContent = `ahiruno $ ${lastIndex(task)}`;
        lastIndex(output).textContent = `add new to-do \\\\ ${lastIndex(task)} //`;
        // show task
        lastIndex(div).appendChild(lastIndex(input));
        lastIndex(div).appendChild(lastIndex(output));
        taskList.appendChild(lastIndex(div));
        // clear form
        newTask.value = '';
    }
});
