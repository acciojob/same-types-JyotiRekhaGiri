function isSameType(value1, value2) {
  //your js code here
	const num1 = parseFloat(value1);
  const num2 = parseFloat(value2);

  return typeof num1 === 'number' && typeof num2 === 'number';
}
// Convert input values to numbers

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
