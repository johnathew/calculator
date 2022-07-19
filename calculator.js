const buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
let display = document.getElementById("display");
let operatorDisplay = document.getElementById("operatorDisplay");


let operation = "";
let firstOperand = "";
let waitingOnSecondOperand = null
let secondOperand = "";


function add(a, b) {
  return (a += b);
}

function subtract(a, b) {
  return (a -= b);
}

function multiply(a, b) {
  return (a *= b);
}

function divide(a, b) {
  return (a /= b);
}



function calculate(e) {
  operation += e.innerText;
  display.textContent = operation;
  console.log(operation)
}




function operate(e) {

  const operatorTest = /[+-\/*]/.test(operation)

  if (e.value === "+" && operatorTest === false) {
    display.textContent += e.value
    operation += e.value
  } 
  if (e.value === "-" && operatorTest === false) {
    display.textContent += e.value
    operation += e.value
  } if (e.value === "*" && operatorTest === false) {
    display.textContent += e.value
    operation += e.value
  } if (e.value === "/" && operatorTest === false) {
    display.textContent += e.value
    operation += e.value
  } 


  // let replacePlus = display.textContent.replace("+", function() {})
  // let replaceMinus = display.textContent.replace("-", "blah")
  // let replaceDivide = display.textContent.replace("/", "watever")
  // let replaceTimes = display.textContent.replace("*", "watever")


  // display.textContent.includes(plusOperator) ? replacePlus : display.textContent += e.value;
  // display.textContent.includes(minusOperator) ? replaceMinus : display.textContent += e.value;
  // display.textContent.includes(divideOperator) ? replaceDivide : display.textContent += e.value;
  // display.textContent.includes(timesOperator) ? replaceTimes : display.textContent += e.value;

  console.log(display.textContent, "display")
  console.log(operation,"operation")
  console.log(operatorTest)
}

//   if (e.value === "-" && display.textContent.includes("-")) {
//     display.textContent += e.value;
//     operation += e.value;
//   }

//   if (e.value === "/" && display.textContent.includes("/")) {
//     display.textContent += e.value;
//     operation += e.value;
//   }
//   if (e.value === "*" && !display.textContent.includes("*")) {
//     display.textContent += e.value;
//     operation += e.value;
//   }
// }

function doMath() {
  const timesOperator = operation.split("*");
  const minusOperator = operation.split("-");
  const addOperator = operation.split("+");
  const divisionOperator = operation.split("/");

  if (operation.includes("*")) {
    result.textContent = multiply(+timesOperator[0], +timesOperator[1]);
  }
  if (operation.includes("-")) {
    result.textContent = subtract(+minusOperator[0], +minusOperator[1]);
  }
  if (operation.includes("+")) {
    result.textContent = add(+addOperator[0], +addOperator[1]);
  }
  if (operation.includes("/")) {
    result.textContent = divide(+divisionOperator[0], +divisionOperator[1]);
  }
}

function clear() {
  result.textContent = "";
  display.textContent = "";
}

// if (
//     !operation.includes("*") ||
//     !operation.includes("-") ||
//     !operation.includes("+") ||
//     !operation.includes("/")
//   ) {
//     if (
//       e.id === "plusButton" ||
//       e.id === "minusButton" ||
//       e.id === "divideButton" ||
//       e.id === "timesButton"
//     ) {
//       operation += e.innerText;
//       display.textContent += e.innerText;
//     }
// }
//     if (
//       operation.includes("*") ||
//       operation.includes("-") ||
//       operation.includes("+") ||
//       operation.includes("/")
//     ) {

//       operation.replace(e.innerText);
//     }

// e.id === "plusButton" ||
// e.id === "minusButton" ||
// e.id === "divideButton" ||
// e.id === "timesButton"

// switch (e.id) {
//     case "plusButton":
//       e.innerText += lastOperator
//       console.log (lastOperator)
//       display.textContent += lastOperator

//     //   display.textContent.includes("+")
//     //     ? display.textContent.replace("+", e.innerText)
//     //     : (display.textContent += e.innerText);

//     //   operation.includes("+")
//     //     ? operation.textContent.replace("+", e.innerText)
//     //     : (operation.textContent += e.innerText);

//       break;
//     case "minusButton":
//       display.textContent.includes("-")
//         ? display.textContent.replace("-", e.innerText)
//         : (display.textContent += e.innerText);

//       operation.includes("-")
//         ? operation.textContent.replace("-", e.innerText)
//         : (operation.textContent += e.innerText);

//       break;
//     case "timesButton":
//       display.textContent.includes("*")
//         ? display.textContent.replace("*", e.innerText)
//         : (display.textContent += e.innerText);

//       operation.includes("*")
//         ? operation.textContent.replace("*", e.innerText)
//         : (operation.textContent += e.innerText);

//       break;
//     case "divideButton":
//       display.textContent.includes("/")
//         ? display.textContent.replace("/", e.innerText)
//         : (display.textContent += e.innerText);

//       operation.includes("/")
//         ? operation.textContent.replace("/", e.innerText)
//         : (operation.textContent += e.innerText);
//       break;
//   }
