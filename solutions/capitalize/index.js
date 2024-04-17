/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

/*
BEST SOLUTION -> We create an empty array that will be used to display the answer later, and we create a for loop of every word inside the str.split(' '), that gives us an array separating
every word of the string. In every iteration we create the capitalizeWord variable that gets the first letter of the word that we are iterating and turn it into uppercase, plus the rest of 
the word. In every iteration we push the capitalizeWord (before -> coding, after -> Coding) to the result variable (array). And by the end of the for loop we return the result joining it with 
a space between every element of the array (before -> result = ['Coding', 'Is', 'Awesome'], with join -> result = 'CodingIsAwesome', with join(' ') -> result = 'Coding Is Awesome'), getting our
answer!;
*/
const capitalize = (str) => {
  const result = [];

  for (let word of str.split(" ")) {
    const capitalizeWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizeWord);
  }

  return result.join(" ");
};

/* 
BRUTE FORCE SOLUTION -> We create a variable called result that we store the first letter of the whole string, and turn it into upper case! We create another for loop that loops through all 
the characters of the string starting from index 1 since the index 0 is already printed correctly inside the result variable, and inside the for loop we create an if statement, that say that 
if the previous element was an space, that means we are at the beginning of a word now, so we want to upper case that, we do that and add the letter to the result variable, if the previous 
element is not a space, than we are in the middle of a sentence or at a space itself, so just add that to the result. After the for loop we have the answer already, so we return it with te
result and finish the challenge!;
*/
const capitalize2 = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

module.exports = capitalize;
