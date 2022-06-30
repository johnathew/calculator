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
    const operator = operation.split("*")



    // switch (operator) {
    //           case "*":
    //             display.textContent = multiply(+operator[0], +operator[1]);
                
    //             break;
    //           case "+":
    //             add();
    //             break;
    //           case "/":
    //             divide();
    //             break;
    //           case "-":
    //             subtract();
    //             break;
    //         }

    console.log(operator)



  
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
