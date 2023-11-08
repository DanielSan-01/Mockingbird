let gapped = document.getElementById("gappedcopy")
console.log(gappedcopy)

let count = 0 

function increment(){
  console.log("clicked")
  count = count + 1
  gappedcopy.innerText = count 
  console.log(count)
}