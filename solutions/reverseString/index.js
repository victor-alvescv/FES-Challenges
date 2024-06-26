/** Reverse the provided string.
 *
 * @example
 * reverse('david') === 'divad'
 * reverse('frontend') === 'dnetnorf'
 * reverse('Simplified!') === '!deifilpmiS'
 */

// 'David' => ['D', 'a', 'v', 'i', 'd']
// a = '', c = 'D' => a = 'D' + '' = 'D'
// a = 'D', c = 'a' => a = 'a' + 'D' = 'aD'
// a = 'aD', c = 'v' => a = 'v' + 'aD' = 'vaD'
// a = 'vaD', c = 'i' => a = 'i' + 'vaD' = 'ivaD'
// a = 'ivaD', c = 'd' => a = 'd' + 'ivaD' = 'divaD'

// FINAL SOLUTION (most impressive) -> Using the reduce() method!;
const reverseString = (str) => {
  return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator);
};

// FIRST MADE SOLUTION ->  Using a for loop to loop through all the letters of the string, creating another string reversed!;
const reverseString2 = (str) => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
};

// SECOND MADE SOLUTION -> Using JS functions to turn it into an array, reverse it and turn it back to a string;
const reverseString3 = (str) => {
  return str.split('').reverse().join('')
};



module.exports = reverseString; //Check the other functions with the solutions here, changing the function to check name!;
