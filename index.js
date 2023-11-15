let gapped = document.getElementById("gapped");
let overtakeLevel = document.getElementById("overtake-level");
let gap = 0;

function increment() {
    gap = gap + 1;
    gapped.innerText = gap;

    // Call setLevel function, so everytime we call increment function on the button press, we call setLevel
    setLevel();
}

// Define function to set level
const setLevel = () => {
    if (gap >= 2) {
        overtakeLevel.innerText = "Initiated";
    }

    if (gap >= 4) {
        overtakeLevel.innerText = "Driver";
    }

    if (gap >= 5) {
        overtakeLevel.innerText = "Madlad";
    }

    if (gap >= 7) {
        overtakeLevel.innerText = "Senior Madlad";
    }

    if (gap >= 10) {
        overtakeLevel.innerText = "Absolute MADMAN";
    }

    if (gap >= 15) {
        overtakeLevel.innerText = "TrueSpeed";
    }

    if (gap >= 20) {
        overtakeLevel.innerText = "Legend";
    }

    if (gap >= 23) {
        overtakeLevel.innerText = "ABSOLUTE LEGEND";
    }

    if (gap >= 26) {
        overtakeLevel.innerText = "HOLY SHIT KILL";
    }

    if (gap >= 30) {
        overtakeLevel.innerText = "STOP THIS MAN";
    }

    if (gap >= 32) {
        overtakeLevel.innerText = "WHOS MANS IS THIS";
    }

    if (gap >= 35) {
        overtakeLevel.innerText = "Ghost rider";
    }
};

let lapscompleted = 0;
function incrementlap() {
    lapscompleted = lapscompleted + 1;
}
console.log(lapscompleted);

// document.getElementById("count").innerText = 5
/* 
function increment() {
  console.log ("button was clicked")
}



let gapped = 0

function increment() {
  gapped = gapped + 1
}
console.log (gapped)


increment()
let count = 50
console.log (count)

count = count + 50
console.log (count)

count = count - 75
console.log (count)

count = count + 45
console.log (count)




document.getElementById("gapped").innerText = count
let count = 1

count = count + 1

console.log (gapped)


let firstBatch = 5
let seconBatch = 7
let count = firstBatch + seconBatch
console.log(count)
 */

/* let myyears = 26
let dogyears = 7 
let mydogage = myyears * dogyears

console.log(mydogage) 

// Setting up the the race 🏎 🏎 🏎

let lap1 = 33
let lap2 = 32
let lap3 = 35

function loglaptime () {
  let totaltime = lap1 + lap2 + lap3
  console.log(totaltime)
}
loglaptime()
*/
