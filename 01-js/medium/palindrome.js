/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();

  // Remove non-alphabetic characters
  const alphabeticStr = lowerStr.replace(/[^a-z]/g, "");

  // Reverse the alphabetic string
  const reversedStr = alphabeticStr.split("").reverse().join("");

  // Check if the original and reversed strings are equal
  return alphabeticStr === reversedStr;
}

module.exports = isPalindrome;
