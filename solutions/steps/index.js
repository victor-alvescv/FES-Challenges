/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
  for (let row = 0; row < n; ++row) {
    let step = "";
    for (let column = 0; column < n; ++column) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

// COOL SOLUTION (added after video)
const steps2 = (n) => {
  // Create an array filled with the most amount of spaces we will need in a row
  const spacesArray = new Array(n - 1).fill(" ");

  for (let row = 0; row < n; ++row) {
    // Create an array of all the hashes we need on the row
    const hashArray = new Array(row + 1).fill("#");

    // Create a separate array, adding the hashes then the spaces needed afterwards
    const step = [...hashArray, ...spacesArray.slice(0, n - hashArray.length)];

    // Convert our array of hashes and spaces back to a string to console log
    console.log(step.join(""));
  }
};

module.exports = steps;
