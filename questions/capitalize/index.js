/** Given a sentence, capitalize the first letter of each word and
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
  const result = [];

  for (let word of str.split(" ")) {
    const capitalizeWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalizeWord);
  }

  return result.join(" ");
};

module.exports = capitalize;
