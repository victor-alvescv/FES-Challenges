/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 *
 */

const maxCharacter = (str) => {
  const charMap = new Map();
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  for (let [key, value] of charMap) {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }

  return maxChar;
};

module.exports = maxCharacter;

/* 

[s -> 1]
[i -> 3]
[m -> 1]
[p -> 1]
[l -> 1]
[f -> 1]
[e -> 1]
[d -> 1]


*/
