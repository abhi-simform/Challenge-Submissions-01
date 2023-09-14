// Challenge 05 Default Parameters

// Building upon the last challenge make changes to the printDetails function such that when there is no value being passed when the function is called then the function should print your details.

// If no value is passed in function call the function should print '"YourFirstName" "YourLastName" is "YourAge" years old and lives in "YourLocation"
console.clear();


function printDetails (firstName, lastName, age = 28, location = 'Rupavti') {
  const details = `${firstName} ${lastName} is ${age} years old and lives in ${location}`;
  console.log(details);
}

printDetails("Sandip", "Hirpara", "27", "Rupavti");