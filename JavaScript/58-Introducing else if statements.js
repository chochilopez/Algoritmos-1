/*
Explanation:
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}

Exercise:
Convert the logic to use else if statements.

Tests:
Waiting:You should have at least two else statements
Waiting:You should have at least two if statements
Waiting:You should have closing and opening curly braces for each if else code block.
Waiting:testElseIf(0) should return the string Smaller than 5
Waiting:testElseIf(5) should return the string Between 5 and 10
Waiting:testElseIf(7) should return the string Between 5 and 10
Waiting:testElseIf(10) should return the string Between 5 and 10
Waiting:testElseIf(12) should return the string Greater than 10

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

testElseIf(7);
*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    "Between 5 and 10";
  }
}

testElseIf(7);