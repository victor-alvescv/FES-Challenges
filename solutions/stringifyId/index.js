/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

/* TOP TECH SOLUTION -> Using the new Set method, where we turn the array of objects, into a new array with map() made only by id's. 
We use the new Set() method, with the spread operator with the set to spread all the items inside the object and to turn the object 
given by the set into an array of unique values, joining the uniqueArray, we have our final answer as a string, an string divided by commas with unique values(ID's) coming from the initial arr...;
*/
const stringifyId = (arr) => {
  const idArray = arr.map((obj) => obj.id);

  const uniqueIdArray = [...new Set(idArray)];

  return uniqueIdArray.join(", ");
};

// BRUTE FORCE SOLUTION 1 -> Using another for loop for the words of uniqueArray to create a new string without the ', ' at the end;
const stringifyId2 = (arr) => {
  const idArray = arr.map((obj) => obj.id);
  const uniqueArray = [];
  let idString = "";

  for (let id of idArray) {
    if (!uniqueArray.includes(id)) {
      uniqueArray.push(id);
    }
  }

  for (let i = 0; i < uniqueArray.length; ++i) {
    if (i !== uniqueArray.length - 1) {
      idString += `${uniqueArray[i]}, `;
    } else {
      idString += uniqueArray[i];
    }
  }

  return idString;
};

// BRUTE FORCE SOLUTION 2 -> Using the same idea as the one above but instead of taking out the ', ' from the end, just add to every word and at the return slice out the last 2 characters;
const stringifyId3 = (arr) => {
  const idArray = arr.map((obj) => obj.id);
  const uniqueArray = [];
  let idString = "";

  for (let id of idArray) {
    if (!uniqueArray.includes(id)) {
      uniqueArray.push(id);
    }
  }

  for (let i = 0; i < uniqueArray.length; ++i) {
    idString += `${uniqueArray[i]}, `;
  }

  return idString.slice(0, idString.length - 2);
};

// BRUTE FORCE SOLUTION 3 -> Using join(', ') to make things easer where we don't need idString, or other for loop, the join method is not putting the ', ' in the end;
const stringifyId4 = (arr) => {
  const idArray = arr.map((obj) => obj.id);
  const uniqueArray = [];

  for (let id of idArray) {
    if (!uniqueArray.includes(id)) {
      uniqueArray.push(id);
    }
  }

  return uniqueArray.join(", ");
};

module.exports = stringifyId; //Check the other functions with the solutions here, changing the function to check name!;
