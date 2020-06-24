function dis(val) {
document.getElementById("answer").value+=val
 }
 
function solve() {
let numbers = document.getElementById("answer").value
let result = eval(numbers)
document.getElementById("answer").value = result
}

function clr() {
document.getElementById("answer").value = ""
}