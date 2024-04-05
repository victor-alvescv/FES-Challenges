/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'divad'
 * maxCharacter('foo 111123') === 'dnetnorf'
 */

// BEGINNER SOLUTION
const maxCharacter = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    }
    else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

// TOP TECH SOLUTION
//  const maxCharacter = (str) => {
//    const charMap = new Map();
//    let max = 0;
//    let maxChar = "";

//    for (const char of str) {
//      charMap.set(char, charMap.get(char) + 1 || 1
//    }

//    for (const [char, count] of charMap) {
//      if (count > max) {
//        max = count;
//        maxChar = char;
//      }
//    }
//    return maxChar;
// };

module.exports = maxCharacter;
