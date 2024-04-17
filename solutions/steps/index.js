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

/* 
BEST SOLUTION -> Imagine a square with n sides, we create a for loop that represents the row of the square, inside that for loop we create a variable called step, and another for loop that 
goes over the columns of the square! Inside that for loop we have an if statement that say, if the columns position is smaller or equal to the row position, add a hashtag symbol to the step
variable, if that is not the case, add a space! Because if column that we are iterating is bigger than the row we are at, we are touching a space we don't want, if the row is 1 we only want 
1 hashtag on that row, if the row is 2, we want 2, if the row is 3 we want 3, etc...! If we have a 4x4 square, in the first row we want 1 hashtag and 3 empty spaces! So in this case the row
= 0 (index number representing the first row) will be compared with the first column, in that case 0 = 0, so a hashtag will be printed, but when we compare now the first row with the second
column, 1 > 0, in this case a space will be printed! And that will work for all the positions inside the square! After we do all that, we print the result inside the step variable.
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
