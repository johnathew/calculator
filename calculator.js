const buttons = document.querySelectorAll("button");
let result = document.getElementById("result");
let display = document.getElementById("display");

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

let operation = "";

function calculate(e) {
  if (e.value >= 0) {
    operation += e.innerText;
    display.textContent = operation;
  }
}

function operator(e) {
  if (
    e.id === "plusButton" ||
    e.id === "minusButton" ||
    e.id === "divideButton" ||
    e.id === "timesButton"
  ) {
    operation += e.innerText;
    display.textContent = operation;

    // if (operation.includes("*")) {
    //     operation.replace("*", " ")
    //     console.log(operation)
    // }
  }
}

function doMath() {
  const timesOperator = operation.split("*")
  const minusOperator = operation.split("-")
  const addOperator = operation.split("+")
  const divisionOperator = operation.split("/")

  if (operation.includes("*")) {
    display.textContent = multiply(+timesOperator[0], +timesOperator[1]);
  }
  if (operation.includes("-")) {
    display.textContent = subtract(+minusOperator[0], +minusOperator[1]);
  }
  if (operation.includes("+")) {
    display.textContent = add(+addOperator[0], +addOperator[1]);
  }
  if (operation.includes("/")) {
    display.textContent = divide(+divisionOperator[0], +divisionOperator[1]);
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

// function test() {
//     switch (operation) {
//       case "*":
//         multiply();
//         break;
//       case "+":
//         add();
//         break;
//       case "/":
//         divide();
//         break;
//       case "-":
//         subtract();
//         break;
//     }
//   }
