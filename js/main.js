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
if (oneOrZero === 1) {
    log("color added to body")
    new Promise((resolve)=>{
        setTimeout(()=>{
            const bodyHexColor = randomColour();
            log(`${bodyHexColor}`)
            log (`background-color: ${bodyHexColor};`)
            const bodyBackgroundColor = `background-color: ${bodyHexColor};`
            document.querySelector("body").style.backgroundColor = `${bodyHexColor}`
        }, getRandomInt(1000, 2001))
    })
} else {
    log("text added to main")
}
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function randomColour () {
    //return a random 6 digit hex colour
    return `#` + Math.random().toString(16).substring(2, 8);
}