// Challenge 03 Arrow Functions

// Convert the given function into an arrow function and store the returned value in a variable and log it to the console.

function mathFunction(a, b) {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  return { addition, subtraction, multiplication, division };
}

let addition = (a, b) => console.log(a + b); // Shorthand we can use if need to preform small task
addition(10, 5);

let myFunction = (a, b) => {
  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  console.log(
    `Addition value is ${addition},Substraction value is ${subtraction},Multiplication value is ${multiplication}, division value is ${division}`
  );
};
myFunction(10, 5);
