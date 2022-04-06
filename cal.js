function add (a,b) {
  return sum = a+b;
}
function subtract (a,b) {
  return sum = a-b;
}
function multiply (a,b) {
  return sum = a*b;
} 
function divide (a,b) {
  return sum = (a)/(b);
}
function operate (a,b) {
 return sum = add(a,b)
}
let sum=[];



function numberViewer() {
let numString = sum.join('');
document.getElementById("numView").innerHTML=numString;

}

function returnOne() {
  let click = document.getElementById('one');
  sum.push(1);
  numberViewer();
}
function returnTwo() {
  let click = document.getElementById('two');
  sum.push(2);
  numberViewer();
}
function returnThree() {
  let click = document.getElementById('three');
  sum.push(3);
  numberViewer();
}
function returnFour() {
  let click = document.getElementById('four');
  sum.push(4);
  numberViewer();
}
function returnFive() {
  let click = document.getElementById('five');
  sum.push(5);
  numberViewer();
}
function returnSix() {
  let click = document.getElementById('six');
  sum.push(6);
  numberViewer();
}
function returnSeven() {
  let click = document.getElementById('seven');
  sum.push(7);
  numberViewer();
}
function returnEight() {
  let click = document.getElementById('eight');
  sum.push(8);
  numberViewer();
}
function returnNine() {
  let click = document.getElementById('nine');
  sum.push(9);
  numberViewer();
}
function returnZero() {
  let click = document.getElementById('zero');
  sum.push(0);
  numberViewer();
}

function returnClear() {
  let click = document.getElementById('zero');
  sum=[];
  numberViewer();
}