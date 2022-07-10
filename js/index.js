// show ascii art
var ahiru = `
        YYYYYYYYYY
     YYYYYYYYYYYYYYY
    YYYYBYYYYYYYYYYYYY
 RRRYYYYYYYYYYYYYYYYYY
    YYYYYYYYYYYYYYYYY
     YYYYYYYYYYYYYYYY           
  YYYYYYYYYYYYYYYYYYYYYYY     YYY
 YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
 YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
  YYYYYYYYYYYYYYYYYYYYYYYYYYYY
   YYYYYYYYYYYYYYYYYYYYYYYY`;

const ahiruArt = document.getElementById('ahiru');
const ahiruList = [];

for (const a of Array.from(ahiru)) {
    ahiruList.push(document.createElement('span'));
    if (a === ' ' || a === '\n') {
        ahiruList[ahiruList.length-1].textContent = a;
    } else {
        ahiruList[ahiruList.length-1].textContent = '#';
        if (a === 'Y') {
            ahiruList[ahiruList.length-1].style.color = 'gold';
        } else if (a === 'R') {
            ahiruList[ahiruList.length-1].style.color = 'red';
        } else if (a === 'B') {
            ahiruList[ahiruList.length-1].style.color = 'black';
        }
    }
    ahiruArt.appendChild(ahiruList[ahiruList.length-1]);
}
//document.body.appendChild(ahiruArt);

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
