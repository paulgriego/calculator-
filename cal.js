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
  if(buttonInput=="add" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;


  }else if(buttonInput=="add" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
    

}
  if(buttonInput=="subtract" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("subtract").disabled = true;

  }else if(buttonInput=="subtract" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("subtract").disabled = true;

  }
  if(buttonInput=="multiply" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("multiply").disabled = true;

  }else if(buttonInput=="multiply" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("multiply").disabled = true;

  }
  if(buttonInput=="divide" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("divide").disabled = true;

  }else if(buttonInput=="divide" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("divide").disabled = true;

  }


    }
   

  function equal () {

    if(buttonInput=="add" && addToTotal =="no") {
        total=add(storedValue,userInput);
        document.getElementById("numView").innerHTML=total;
        addToTotal="yes";
        document.getElementById("add").disabled = false;
        document.getElementById("subtract").disabled = false;
        document.getElementById("multiply").disabled = false;
        document.getElementById("divide").disabled = false;

    }else if(buttonInput=="add" && addToTotal =="yes") {
      total=add(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;

    }

    if(buttonInput=="subtract" && addToTotal =="no") {
      total=subtract(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("subtract").disabled = false;

    }else if(buttonInput=="subtract" && addToTotal =="yes") {
      total=subtract(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      document.getElementById("subtract").disabled = false;

    }
    if(buttonInput=="multiply" && addToTotal =="no") {
      total=multiply(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("multiply").disabled = false;

    }else if(buttonInput=="multiply" && addToTotal =="yes") {
      total=multiply(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      document.getElementById("multiply").disabled = false;

    }
    if(buttonInput=="divide" && addToTotal =="no") {
      total=divide(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("divide").disabled = false;

    }else if(buttonInput=="divide" && addToTotal =="yes") {
      total=divide(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      document.getElementById("divide").disabled = false;

    }

    // } else if(buttonInput=="multiply") {
    //     total=multiply(storedValue,userInput);
    //     total=Math.round(total * 100) / 100;
    //     document.getElementById("numView").innerHTML=total;
    // } else if(buttonInput=="subtract") {
    //     total=subtract(storedValue,userInput);
    //     document.getElementById("numView").innerHTML=total;
        
    // } else if(buttonInput=="divide") {
    //     total=divide(storedValue,userInput);
    //     total=Math.round(total * 100) / 100;
    //     document.getElementById("numView").innerHTML=total;
        
    //   }
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
