function add (a,b) {
  return a+b;
}
function subtract (a,b) {
  return a-b;
}
function multiply (a,b) {
  return a*b;
} 
function divide (a,b) {
  return (a)/(b);
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
  if(buttonInput=="add") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
  }else if(buttonInput=="multiply") {
      storedValue=userInput;
      input=[];
      userInput="";
      document.getElementById("numView").innerHTML=userInput;
      document.getElementById("deci").disabled = false;
  
  }else if(buttonInput=="subtract") {
      storedValue=userInput;
      input=[];
      userInput="";
      document.getElementById("numView").innerHTML=userInput;
      document.getElementById("deci").disabled = false;
  }else if(buttonInput=="divide") {
      storedValue=userInput;
      input=[];
      userInput="";
      document.getElementById("numView").innerHTML=userInput;
      document.getElementById("deci").disabled = false;
    }
  } 

  function equal () {
    if(buttonInput=="add") {
        total=add(storedValue,userInput);
        document.getElementById("numView").innerHTML=total;
        addToTotal="yes";
    } else if(buttonInput=="multiply") {
        total=multiply(storedValue,userInput);
        total=Math.round(total * 100) / 100;
        document.getElementById("numView").innerHTML=total;
    } else if(buttonInput=="subtract") {
        total=subtract(storedValue,userInput);
        document.getElementById("numView").innerHTML=total;
        
    } else if(buttonInput=="divide") {
        total=divide(storedValue,userInput);
        total=Math.round(total * 100) / 100;
        document.getElementById("numView").innerHTML=total;
        
      }
    } 
  

let input=[];
let userInput;
let storedValue;
let buttonInput="noSelection";
let total;
let addToTotal ="no";

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
  buttonInput="noSelection";
  addToTotal="no";
}
