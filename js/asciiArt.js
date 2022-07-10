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
