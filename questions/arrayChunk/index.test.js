const arrayChunk = require("./index");

test("Given an indivisible array to chunk", () => {
  expect(arrayChunk([1, 4, 11, 4, 5, -6, 7, 14], 3)).toEqual([
    [1, 4, 11],
    [4, 5, -6],
    [7, 14],
  ]);
});

test("Given a divisible array to chunk", () => {
  expect(arrayChunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Given another indivisible array to chunk", () => {
  expect(arrayChunk([1, 3, 6, 7, 8, 23], 5)).toEqual([[1, 3, 6, 7, 8], [23]]);
});
