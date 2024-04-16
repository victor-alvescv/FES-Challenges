/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

/*
 BEST PRACTISE -> We use here the sort() method, that sorts every single element of an array in alphabetic order! We create a function called sortString() and inside it we turn the string to
 lower case, turn it into an array (since the sort method only works with arrays), we sort it, join it back to a string, and replace all the spaces for empty spaces! we compare those two functions
 while passing the 2 different strings, receiving 2 different results, is not an anagram, otherwise, is an anagram!;
*/
const anagrams = (strA, strB) => {
  return sortString(strA) === sortString(strB);
};

const sortString = (str) => {
  return str.toLowerCase().split("").sort().join("").replaceAll(" ", "");
};

/*
 USING CHARACTER MAP -> We create 2 Characters Map for each string, both on one separate function so we don't repeat ourselves. We create another function to be used inside the first one so
 we can remove all the spaces and make all the letters lower case. After that we create an if statement saying that if both of the character maps don't have the same length, they automatically
 are not anagrams! With a for loop we pass the key and value from charMapA, and we see if every character in charMapA is inside the charMapB and have the same value as well, if it does is an
 anagram, if it doesn't is not an anagram;
*/
const anagrams2 = (strA, strB) => {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if (charMapA.size !== charMapB.size) {
    return false;
  }

  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
      return false;
    }
  }

  return true;
};

const buildCharMap = (str) => {
  const charMap = new Map();
  for (const char of removeSpacesAndLowerCase(str)) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  return charMap;
};

const removeSpacesAndLowerCase = (str) => {
  return str.replaceAll(" ", "").toLowerCase();
};

module.exports = anagrams;
