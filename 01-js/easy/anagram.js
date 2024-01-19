/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 // Helper function to clean and sort the characters in a string
 const cleanAndSort = (str) => str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');

 // Clean and sort both input strings
 const sortedStr1 = cleanAndSort(str1);
 const sortedStr2 = cleanAndSort(str2);

 // Compare the cleaned and sorted strings
 return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
