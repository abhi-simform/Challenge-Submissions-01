// Challenge 07 Ternary Operator

// Convert the given if else statement into ternary operation and try different value combinations of a and b to verify your code

const a = true;
const b = false;

if (a) {
  if (b) {
    console.log("b is true");
  } else {
    console.log("b is false");
  }
} else {
  console.log("a is false");
}

console.log("Challenge solutions");
a
  ? b
    ? console.log("b is true")
    : console.log("b is false")
  : console.log("a is false");
