function isSameType(value1, value2) {
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// do not change the code below.
let inputValue1 = prompt("Enter Start of the Range.");
let inputValue2 = prompt("Enter End Of the Range.");

// Convert input values to numbers
let value1 = parseFloat(inputValue1);
let value2 = parseFloat(inputValue2);

alert(isSameType(value1, value2));
