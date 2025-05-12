<<<<<<< HEAD
var calculate = (num1, num2, operation) => {
  var a = parseFloat(num1.value);
  var b = parseFloat(num2.value);
  var res = operation(a, b);
  displayResult(res);
};

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y ;
}

function displayResult(value) {
  document.getElementById("res").innerHTML = "Result: " + value;
}

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
=======
var calculate = (num1, num2, operation) => {
  var a = parseFloat(num1.value);
  var b = parseFloat(num2.value);
  var res = operation(a, b);
  displayResult(res);
};

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y ;
}

function displayResult(value) {
  document.getElementById("res").innerHTML = "Result: " + value;
}

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
