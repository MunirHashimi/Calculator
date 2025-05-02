// script.js
function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  let expression = display.value;

  // Remove trailing operator if exists
  if (/[\+\-\*\/\.]$/.test(expression)) {
    expression = expression.slice(0, -1);
  }

  try {
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}


function percentage() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}
