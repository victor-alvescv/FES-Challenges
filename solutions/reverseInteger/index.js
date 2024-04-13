/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

//SECOND SOLUTION -> Using the parseInt() method, but now using the Math.sign() method as well at the return, changing the parseInt() location and making everything better and more readable;
const reverseInteger = (int) => {
  const reversed = int.toString().split("").reverse().join("");
  return Math.sign(int) * parseInt(reversed);
};

//FIRST SOLUTION -> Using the parseInt() method, turning the integer into a string, to an array, reversing it and turning it back to a string, and returning it with ternary operators;
const reverseInteger2 = (int) => {
  const reversed = parseInt(int.toString().split("").reverse().join(""));
  return int < 0 ? reversed * -1 : reversed;
};

module.exports = reverseInteger;
