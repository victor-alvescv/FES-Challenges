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

// TOP TECH SOLUTION
const stringifyId = (arr) => {
  const idArray = arr.map((obj) => obj.id);

  const uniqueIdArray = [...new Set(idArray)];

  return uniqueIdArray.join(", ");
};

// BRUTE FORCE SOLUTION 1
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

// BRUTE FORCE SOLUTION 2
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

// BRUTE FORCE SOLUTION 3
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
