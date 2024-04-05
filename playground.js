const str = "Simplified !";
const charMap = new Map();

for (const char of str) {
  const count = charMap.get(char);
  charMap.set(char, count + 1 || 1);
}

for (const [char, count] of charMap) {
  console.log(char, count);
}

// console.log(charMap)
