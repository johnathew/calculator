let result = document.getElementById("result");
let display = document.getElementById("display");

let operation = "";
let firstOperand = "";
let waitingOnOperand = false;

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
  const initialZero = document.getElementById("initialZero")
  operation += e.innerText;
  display.textContent = operation;
  initialZero.textContent = "";

}

function operate(e) {
  const operatorTest = /[+-\/*]/.test(operation);
  
  if (
    operatorTest === true &&
    (display.textContent.charAt(display.textContent.length - 1) === "+" ||
      display.textContent.charAt(display.textContent.length - 1) === "-" ||
      display.textContent.charAt(display.textContent.length - 1) === "/" ||
      display.textContent.charAt(display.textContent.length - 1) === "*")
  ) {
    waitingOnOperand = true;
    display.textContent = display.textContent.replace(
      `${display.textContent.charAt(display.textContent.length - 1)}`,
      e.value
    );
    operation = operation.replace(
      `${operation.charAt(operation.length - 1)}`,
      e.value
    );
  }

  if (operatorTest === false || waitingOnOperand === false) {
    firstOperand += e.value;
    switch (e.value) {
      case "+":
        display.textContent += firstOperand;
        operation += firstOperand;
        break;
      case "-":
        display.textContent += firstOperand;
        operation += firstOperand;
        break;
      case "*":
        display.textContent += firstOperand;
        operation += firstOperand;
        break;
      case "/":
        display.textContent += firstOperand;
        operation += firstOperand;
        break;
    }
  }
}

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

function backspace() {
  display.textContent = display.textContent.substring(0, display.textContent.length - 1);
  operation = operation.substring(0, operation.length - 1);
  firstOperand = firstOperand.substring(0, firstOperand.length - 1);
}


function reset() {
  result.textContent = "";
  display.textContent = "";
  operation = "";
  firstOperand = "";
  initialZero.textContent = "0";
}
