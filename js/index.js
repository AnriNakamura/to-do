// show ascii art
var title = `
         _     _                          _ _     _   
    __ _| |__ (_)_ __ _   _ _ __   ___   | (_)___| |_ 
   / _\` | '_ \\| | '__| | | | '_ \\ / _ \\  | | / __| __|
  | (_| | | | | | |  | |_| | | | | (_) | | | \\__ \\ |_ 
   \\__,_|_| |_|_|_|   \\__,_|_| |_|\\___/  |_|_|___/\\__| `;

const titleDiv = document.getElementById('title');
const titleArt = document.createElement('span');
titleArt.textContent = title;
titleDiv.appendChild(titleArt);

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
