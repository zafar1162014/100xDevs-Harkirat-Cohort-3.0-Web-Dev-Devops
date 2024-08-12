function operate(a, b, operation) {
  return operation(a, b); // Perform the operation passed as an argument
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(5, 3, add));      // Output: 8
console.log(operate(5, 3, multiply)); // Output: 15
