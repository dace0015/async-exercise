const log = console.log;

document.addEventListener('DOMContentLoaded', init);

function init() {
    addListeners()
}

function addListeners() {
    const body = document.querySelector("body")
    body.addEventListener("click", bodyOrMain)
}

function bodyOrMain(ev) {
const oneOrZero = Math.round(Math.random())
if (oneOrZero === 1) {
    log("colour added to body")
    // No need to do a reject because how could this ever fail, right?
    new Promise((resolve)=>{
        setTimeout(()=>{
            const bodyHexColor = randomColour();
            log(`${bodyHexColor}`);
            log (`background-color: ${bodyHexColor};`);
            // document.querySelector("body").style.backgroundColor = `${bodyHexColor}`;
            // return bodyHexColor;
            resolve(bodyHexColor);
        }, getRandomInt(1000, 2001));
    }).then((num)=>{
        log(`I am ${num}`);
        return num;
    })
} else {
    log("text added to main")
}
}

// Used for setting a timeout between one and two seconds. Am I reading this TOO literal from the instructions? Probably. Probably just needed to either put 1000 or 2000.
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// Steve's random color creator from class.
function randomColour () {
    //return a random 6 digit hex colour
    return `#` + Math.random().toString(16).substring(2, 8);
}