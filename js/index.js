// get input and list
const newTask = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

// element lists
const div = [];
const task = [];    // list of things-to-do
const input = [];   // list of input contents
const output = [];  // list of output contents

// get last value of array
const lastIndex = (array) => array[array.length - 1];

// place the cursor in newTask
newTask.focus();

// add new task
newTask.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        // create element
        div.push(document.createElement('div'));
        input.push(document.createElement('span'));
        output.push(document.createElement('span'));

        // input content
        lastIndex(input).textContent = `ahiruno $ ${newTask.value}`;

        // output content
        if (newTask.value === 'ls') { // ls command
            for (const t of task) lastIndex(output).textContent += `${t} `;
        } else if (newTask.value === 'help'){
            lastIndex(output).textContent = 'add: add tasks ls: show tasks';
            console.log(lastIndex(output).textContent);
        } else { // add new task
            task.push(newTask.value);
            lastIndex(output).textContent = `add new to-do \\\\ ${lastIndex(task)} //`;
        }

        // show contents
        lastIndex(div).appendChild(lastIndex(input));
        lastIndex(div).appendChild(lastIndex(output));
        taskList.appendChild(lastIndex(div));

        // clear form
        newTask.value = '';
    }
});
