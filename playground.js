const arr = [1, -1, 2, 3];

const newArr = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, arr.length)

console.log(newArr)