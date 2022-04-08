function add (a,b) {
  return a+b;
}
function subtract (a,b) {
  a-b;
}
function multiply (a,b) {
  a*b;
} 
function divide (a,b) {
   (a)/(b);
}

function buttonInputAdd() {
  buttonInput="add";
  

}
function buttonInputSubtract() {
  buttonInput="subtract"
}
function buttonInputMultiply() {
  buttonInput="multiply"
  
}
function buttonInputDivide() {
  buttonInput= "divide"
  
}

function storeValue () {
switch(buttonInput) {
  case "add":
    alert('add');
    storedValue=userInput;
    break;

  case "subtract":
    alert("subtract");
    storedValue=userInput;
    break;

  case "multiply":
    alert("multiply");
    storedValue=userInput;
    break;
  
  case "divide":
    alert("divide");
    storedValue=userInput;
    break;
}
}



let input=[];
let userInput
let storedValue;
let buttonInput="noSelection"
let total
let inFunction="no"


function parse() {
  userInput = input.join('');
  userInput= parseFloat(userInput);
  document.getElementById("numView").innerHTML=userInput;
}

function returnOne() {
  input.push(1);
  parse();
}
function returnTwo() {
  input.push(2);
  parse();
}
function returnThree() {
  input.push(3);
  parse();
}
function returnFour() {
  input.push(4);
  parse();
}
function returnFive() {
  input.push(5);
  parse();
}
function returnSix() {
  input.push(6);
  parse();
}
function returnSeven() {
  input.push(7);
  parse();
}
function returnEight() {
  input.push(8);
  parse();
}
function returnNine() {
  input.push(9);
  parse();
}
function returnZero() {
  input.push(0);
  parse();
}

function returnZero() {
  input.push(0);
  parse();
}

function returnDecimal() {
  input.push(".");
  document.getElementById("deci").disabled = true;
  parse();
}

function returnClear() {
  userInput="";
  input=[];
  document.getElementById("deci").disabled = false;
  document.getElementById("numView").innerHTML=userInput;
  buttonInput="noSelection"
}
