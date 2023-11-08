
let gapped = document.getElementById("gapped")
console.log (gapped)

let gap = 0

function increment() {
  console.log("clicked")
  gap = gap + 1
  gapped.innerText = gap
  console.log(gap)
}




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

let lapscompleted = 0
function incrementlap(){
  lapscompleted = lapscompleted + 1
}
console.log (lapscompleted)