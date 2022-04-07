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

function operateAdd (a,b) {

 
}




let sum=[];
let sumJoined



function numberViewer() {
  sumJoined = sum.join('');
document.getElementById("numView").innerHTML=sumJoined;
return sumJoined= parseFloat(sumJoined)
}

function returnOne() {
  sum.push(1);
  numberViewer();
}
function returnTwo() {
  sum.push(2);
  numberViewer();
}
function returnThree() {
  sum.push(3);
  numberViewer();
}
function returnFour() {
  sum.push(4);
  numberViewer();
}
function returnFive() {
  sum.push(5);
  numberViewer();
}
function returnSix() {
  sum.push(6);
  numberViewer();
}
function returnSeven() {
  sum.push(7);
  numberViewer();
}
function returnEight() {
  sum.push(8);
  numberViewer();
}
function returnNine() {
  sum.push(9);
  numberViewer();
}
function returnZero() {
  sum.push(0);
  numberViewer();
}

function returnZero() {
  sum.push(0);
  numberViewer();
}

function returnDecimal() {
  sum.push(".");
  document.getElementById("deci").disabled = true;

  numberViewer();
}

function returnClear() {
  sum=[];
  document.getElementById("deci").disabled = false;
  numberViewer();
}
