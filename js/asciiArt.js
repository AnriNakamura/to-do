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
        lastIndex(ahiruList).textContent = a;
    } else {
        lastIndex(ahiruList).textContent = '#';
        if (a === 'Y') {
            lastIndex(ahiruList).style.color = 'gold';
        } else if (a === 'R') {
            lastIndex(ahiruList).style.color = 'red';
        } else if (a === 'B') {
            lastIndex(ahiruList).style.color = 'black';
        }
    }
    ahiruArt.appendChild(lastIndex(ahiruList));
}
