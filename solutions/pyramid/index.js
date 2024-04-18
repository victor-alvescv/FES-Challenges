/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

/* 
BEST SOLUTION -> We create a columnWidth variable to calculate how big the width will be, using an algorithm! We calculate the middle of the column and create a for loop that loops over the 
rows, since n represents the number of rows, this is not a square anymore! We create a step variable again, and other for loop for the columns, using the columnWidth that we calculated
previously. Inside the for loop we create an if statement that say that if the column number in the iteration is bigger than the middle - the row number in the iteration and if the column
is smaller than the middle plus the row number in the iteration, add a #, otherwise add a space. Add hashtags to the middle element - the row and the middle element + the row;
*/
 const pyramid = (n) => {
  const columnWidth = n * 2 - 1;
  const middle = Math.floor(columnWidth / 2);

  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < columnWidth; column++) {
      if (column >= middle - row && column <= middle + row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

module.exports = pyramid;
