const strA = 'aaaaaBBBBcccc';
const strB = 'bbbbbAAAAAccccccCCC';

const sortA = strA.split("").sort().join("").toLowerCase().replaceAll(' ', '');
const sortB = strB.split("").sort().join("").toLowerCase().replaceAll(' ', '');

console.log([sortA, sortB])