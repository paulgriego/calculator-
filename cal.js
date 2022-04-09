//function to add two variables
function add (a,b) {
  return a+b;
}
//function to subtract two variables
function subtract (a,b) {
  return a-b;
}
//function to multiply two variables
function multiply (a,b) {
  return a*b;
} 
//function to divide two variables
function divide (a,b) {
  return (a)/(b);
}
//functions to define operator clicked
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

//stores function  value to userinput 
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

//stores function  total to userinput (if user is eval multiple numbers)
  }else if(buttonInput=="add" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
    var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = false;
      }
    

}
  if(buttonInput=="subtract" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;

  }else if(buttonInput=="subtract" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
    var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = false;
      }

  }
  if(buttonInput=="multiply" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;

  }else if(buttonInput=="multiply" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
    var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = false;
      }

  }
  if(buttonInput=="divide" && addToTotal =="no") {
    storedValue=userInput;
    input=[];
    userInput="";
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("deci").disabled = false;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;

  }else if(buttonInput=="divide" && addToTotal =="yes") {
    storedValue=total;  
    input=[];
    userInput="";  
    document.getElementById("numView").innerHTML=userInput;
    document.getElementById("add").disabled = true;
    document.getElementById("subtract").disabled = true;
    document.getElementById("multiply").disabled = true;
    document.getElementById("divide").disabled = true;
    var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = false;
      }

  }


    }
   
//operates based on buttonInput value and gives total while disabling some buttons
  function equal () {
    if(buttonInput=="add" && addToTotal =="no") {
      total=add(storedValue,userInput);
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("deci").disabled = false;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }
      

    }else if(buttonInput=="add" && addToTotal =="yes") {
      total=add(storedValue,userInput);
      document.getElementById("deci").disabled = false;
      document.getElementById("numView").innerHTML=total;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }

    }

    if(buttonInput=="subtract" && addToTotal =="no") {
      total=subtract(storedValue,userInput);
      total=Math.round(total * 100) / 100
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("deci").disabled = false;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }

      

    }else if(buttonInput=="subtract" && addToTotal =="yes") {
      total=subtract(storedValue,userInput);
      total=Math.round(total * 100) / 100
      document.getElementById("deci").disabled = false;
      document.getElementById("numView").innerHTML=total;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }


    }
    if(buttonInput=="multiply" && addToTotal =="no") {
      total=multiply(storedValue,userInput);
      total=Math.round(total * 100) / 100
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("deci").disabled = false;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }


    }else if(buttonInput=="multiply" && addToTotal =="yes") {
      total=multiply(storedValue,userInput);
      total=Math.round(total * 100) / 100
      document.getElementById("deci").disabled = false
      document.getElementById("numView").innerHTML=total;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }


    }
    if(buttonInput=="divide" && addToTotal =="no") {
      total=divide(storedValue,userInput);
      total=Math.round(total * 100) / 100
      document.getElementById("numView").innerHTML=total;
      addToTotal="yes";
      document.getElementById("deci").disabled = false;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }


    }else if(buttonInput=="divide" && addToTotal =="yes") {
      total=divide(storedValue,userInput);
      total=Math.round(total * 100) / 100
      document.getElementById("deci").disabled = false;
      document.getElementById("numView").innerHTML=total;
      document.getElementById("add").disabled = false;
      document.getElementById("subtract").disabled = false;
      document.getElementById("multiply").disabled = false;
      document.getElementById("divide").disabled = false;
      var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = true;
      }


    }
    } 
//global var to hold different inputs 
let input=[];
let userInput;
let storedValue;
let buttonInput="noSelection";
let total;
let addToTotal ="no";
//converts userinput into a interger
function parse() {
  userInput = input.join('');
  userInput= parseFloat(userInput);
  document.getElementById("numView").innerHTML=userInput;
}
//functions for user input
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
  input.push("0.");
  document.getElementById("deci").disabled = true;
  parse();

}
//function to clear/reset cal
function returnClear() {
  userInput="";
  input=[];
  document.getElementById("deci").disabled = false;
  document.getElementById("numView").innerHTML=userInput;
  buttonInput="noSelection";
  addToTotal="no";
  var buttonNum = document.getElementsByClassName("buttonnumber");
      for(var i = 0; i < buttonNum.length; i++) {
      buttonNum[i].disabled = false;
      }
}
