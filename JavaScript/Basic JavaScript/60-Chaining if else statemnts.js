/*
Explanation:
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

Exercise:
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

Tests:
Waiting:You should have at least four else statements
Waiting:You should have at least four if statements
Waiting:You should have at least one return statement
Waiting:testSize(0) should return the string Tiny
Waiting:testSize(4) should return the string Tiny
Waiting:testSize(5) should return the string Small
Waiting:testSize(8) should return the string Small
Waiting:testSize(10) should return the string Medium
Waiting:testSize(14) should return the string Medium
Waiting:testSize(15) should return the string Large
Waiting:testSize(17) should return the string Large
Waiting:testSize(20) should return the string Huge
Waiting:testSize(25) should return the string Huge

function orderMyLogic(val) {
function testSize(num) {
  return "Change Me";
}

testSize(7);
}

orderMyLogic(7);
*/
function testSize(num) {
  if (num < 5) 
    return "Tiny";
  else if (num < 10) 
    return "Small";
  else if (num < 15) 
    return "Medium";
  else if (num < 20) 
    return "Large";
  else 
     return "Huge";
}

testSize(7);