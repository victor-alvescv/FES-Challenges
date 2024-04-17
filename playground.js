
const str = 'coding is awesome'
const result = [];

  for (let word of str.split(" ")) {
    const capitalizeWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizeWord);
  }

console.log(result)
