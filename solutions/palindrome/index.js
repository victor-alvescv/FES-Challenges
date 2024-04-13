/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

// TOP TECH SOLUTION -> Only comparing the necessary number of characters!;
const palindrome = (str) => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++) {
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex]) {
      return false;
    }
  }
  return true;
};

// FIRST SOLUTION -> Comparing the string with the opposite of it!
const palindrome2 = (str) => {
  const reversedString = str.split("").reverse().join("");
  return str === reversedString;
};

// SECOND SOLUTION -> Using every() method!
const palindrome3 = (str) => {
  return str
    .split("")
    .every((char, index) => char === str[str.length - 1 - index]);
};

module.exports = palindrome; //Check the other functions with the solutions here, changing the function to check name!;
