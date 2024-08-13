/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Helper function to normalize strings by converting to lowercase and removing non-alphabetic characters
  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '');

  // Normalize both strings
  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  // If lengths of normalized strings are not the same, they cannot be anagrams
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Sort the characters of both normalized strings and compare
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  // Return true if the sorted strings are identical, false otherwise
  return sortedStr1 === sortedStr2;
}


// Test cases
const test1 = isAnagram('lis ten', 'silent'); // should return true
const test2 = isAnagram('hello', 'world');   // should return false
const test3 = isAnagram('The Morse Code', 'Here come dots'); // should return true
console.log(test1);
console.log(test2);
console.log(test3);