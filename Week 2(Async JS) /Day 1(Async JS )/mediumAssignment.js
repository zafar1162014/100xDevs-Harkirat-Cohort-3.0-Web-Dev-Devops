/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const normalizedStr = str.toLowerCase();
    
    const vowels = 'aeiou';
    
    let vowelCount = 0;
    
    for (let char of normalizedStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

module.exports = countVowels;

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("Programming")); // Output: 3
console.log(countVowels("AEIOU")); // Output: 5
console.log(countVowels("")); // Output: 0
