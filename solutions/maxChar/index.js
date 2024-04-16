/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'divad'
 * maxCharacter('foo 111123') === 'dnetnorf'
 */
/* SECOND SOLUTION -> Using the Map() method, we receive a bunch of array's instead of an object, inside a for of loop(with a string) that loops through all the characters of the string, we 
  use set() and get() so we can set the Map() key to the characters of the string, and the value to be either number 1 (if the character isn't already inside the map) or the number of the 
  character that is inside the map already + 1. After that we create a new for of loop (with arrays), and we desconstruct the key and value of the charMap(that is a Map()), because the Map()
  method gives us the ability to separate key and values like that! So we do a simple if statement! If count(the value, number) is bigger than max(initialy = 0), than make the max the count
  and the max character the character we are on! With that we have stores in the max: the number of time the most showing character appears, and in maxChar: the character that appeared the 
  most! Also our answer that we return!;*/

const maxCharacter = (str) => {
  const charMap = new Map();
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }
  for (const [char, count] of charMap) {
    if (count > max) {
      max = count;
      maxChar = char;
    }
  }

  return maxChar;
};

/* FIRST SOLUTION -> Using two for loops where in the first one we create the content for the charMap object, to be looped in the second loop, where we find the max number of appearence and 
the character who haves it!; */

const maxCharacter2 = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};

module.exports = maxCharacter;

/* 

Note: For of loops it iterates over the values of an iterable object, a structure that can be looped over like arrays, strings and etc...! And For in loops it iterates over the enumerable 
properties of an object. So FOR OF is used by most of the structures, but FOR IN is used in objects!! Both of them can be used with any type of structure, but those are the reccomendations;

*/
