/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(inputString) {
  // Convert the input string to lowercase to handle both uppercase and lowercase vowels
  inputString = inputString.toLowerCase();

  // Initialize a variable to count vowels
  let vowelCount = 0;

  // Iterate through each character in the string
  for (let char of inputString) {
    // Check if the character is a vowel (a, e, i, o, u)
    if ("aeiou".includes(char)) {
      // If it is, increment the vowel count
      vowelCount++;
    }
  }

  // Return the final vowel count
  return vowelCount;
}

module.exports = countVowels;
