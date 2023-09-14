// Challenge 08 Nullish Coalescing Operator

// Write Nullish Coalescing Operation withing printDetails function such that the function accepts empty string as last name

function printDetails(shubham, lname) {
  lname = lname ?? '';
  console.log(`I am ${shubham} ${lname}`);
}

printDetails('shubham',null);
