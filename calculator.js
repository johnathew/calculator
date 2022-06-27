let result = document.getElementById("result");
let display = document.getElementById("display");

function add(a, b) {
  return (a += b);
}

function minus(a, b) {
  return (a -= b);
}

function multiply(a, b) {
  return (a *= b);
}

function divide(a, b) {
  return (a /= b);
}

let operation = [];

function calculate(e) {
  const buttons = document.querySelectorAll("button");


  if (
    e.innerText >= 0 ||
    e.innerText === "+" ||
    e.innerText === "-" ||
    e.innerText === "/" ||
    e.innerText === "*"
  ) {
    operation.push(e.innerText);
    display.textContent = operation.join(" ");
  }
  console.log(operation);
}

function doMath() {
  for (let i = 0; i < operation.length; i++) {
    if (operation[1] === "+") {
      result.textContent = add(+operation[0], +operation[2]);
    }
    if (operation[1] === "-") {
      result.textContent = minus(+operation[0], +operation[2]);
    }
    if (operation[1] === "*") {
      result.textContent = multiply(+operation[0], +operation[2]);
    }
    if (operation[1] === "/") {
      result.textContent = divide(+operation[0], +operation[2]);
    }
  }
}

function clear() {
    result.textContent = "";
    display.textContent = "";
}

// switch() {

// case "+":
//     console.log(add());
// break;
// case "-":
//     console.log(minus());
// break;
// case "*":
//     console.log(multiply());
// break;
// case "/":
//     console.log(divide());
// break;

// }
