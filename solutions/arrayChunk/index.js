/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

// BEST PRACTISE ->
const arrayChunk = (array, size) => {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i += size) {
    const subarray = array.slice(i, i + size);
    chunkedArray.push(subarray);
  }
  return chunkedArray;
};

/* 
FIRST SOLUTION -> We create an empty array, a for loop that goes according to the array length. But in this case we only want to iterate the elements on index divisible by the size (number 
of elements inside the subarray). We create a variable called subarray that slices the array by the current index position and the current index position + the size. We push the result to 
the chunkedArray every loop, and return the final result;
*/
const arrayChunk2 = (array, size) => {
  const chunkedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % size !== 0) {
      continue;
    }
    const subarray = array.slice(i, i + size);
    chunkedArray.push(subarray);
  }
  return chunkedArray;
};

module.exports = arrayChunk;
