function isSameType(value1, value2) {
  // Convert input values to numbers
  const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  // Check if both values are numbers and have the same type
  return typeof num1 === 'number' && typeof num2 === 'number' && typeof num1 === typeof num2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
