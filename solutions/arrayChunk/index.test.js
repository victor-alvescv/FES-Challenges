const arrayChunk = require("./index");

test("Given an array1 to chunk", () => {
  expect(arrayChunk([1, 4, 11, 4, 5, -6, 7, 14], 3)).toEqual([
    [1, 4, 11],
    [4, 5, -6],
    [7, 14],
  ]);
});

test("Given an array2 to chunk", () => {
  expect(arrayChunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Given an array2 to chunk", () => {
  expect(arrayChunk([1, 3, 6, 7, 8, 23], 5)).toEqual([[1, 3, 6, 7, 8], [23]]);
});
