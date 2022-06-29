// receive input
function output() {
    out.innerText = 'Your input: ' + text.value;
}

const submit = document.getElementById('submit');
const text = document.getElementById('text');
const out = document.getElementById('out');

submit.addEventListener('click', output);