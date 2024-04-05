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

// FINAL SOLUTION (most impressive)
const reverseString = (str) => {
  return str
    .split("")
    .reduce((accumulator, currentValue) => currentValue + accumulator);
};

// SECOND SOLUTION (easiest)
// const reverseString = (str) => {
//   return str.split('').reverse().join('');
// };

// FIRST SOLUTION (bruteforce)
// const reverseString = (str) => {
//   let reversed = '';

//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// };

// PLAYGROUND
// const arr = [1, -1, 2, 3];
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
// const sum = arr.reduce((accumulator, current) => accumulator + current);
// console.log(sum);

module.exports = reverseString;
