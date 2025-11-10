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
const oneOrZero = Math.round(Math.random())
// log(oneOrZero)
// log(getRandomInt(1000, 2001))
new Promise((leftPath, rightPath)=>{
    setTimeout(()=> {
        
    })
})
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}