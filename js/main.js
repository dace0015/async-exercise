const log = console.log;

document.addEventListener('DOMContentLoaded', init);

function init() {
    addListeners()
}

function addListeners() {
    const body = document.querySelector("body")
    body.addEventListener("click", yesNo)
}

function yesNo(ev) {
//   return Math.round(Math.random()) === 1 ? true : false;
// log(Math.round(Math.random()) === 1 ? true : false)
log(Math.round(Math.random()))
}