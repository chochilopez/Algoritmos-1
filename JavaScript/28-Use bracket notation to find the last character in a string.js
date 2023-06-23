/*
Explanation:
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.

Exercise:
Use bracket notation to find the last character in the lastName variable.

Hint: Try looking at the example above if you get stuck.

Tests:
Waiting:lastLetterOfLastName should be the letter e.
Waiting:You should use .length to get the last letter.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
*/
const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);