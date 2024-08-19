/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '');

  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

const test1 = isAnagram('lis ten', 'silent'); // return true
const test2 = isAnagram('hello', 'world');   // return false
const test3 = isAnagram('The Morse Code', 'Here come dots'); //  return true
console.log(test1);
console.log(test2);
console.log(test3);
// expenditure-analysis.js
/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  return [];
}

module.exports = calculateTotalSpentByCategory;