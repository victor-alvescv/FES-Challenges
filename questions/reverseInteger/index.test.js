const reverseInteger = require("./index");

test("reverseInteger accepts 0 as an input", () => {
  expect(reverseInteger(0)).toEqual(0);
});

test("reverseInteger is able to reverse a positive number", () => {
  expect(reverseInteger(1234)).toEqual(4321);
  expect(reverseInteger(100)).toEqual(1);
  expect(reverseInteger(56)).toEqual(65);
  expect(reverseInteger(900)).toEqual(9);
});

test("reverseInteger is able to reverse a negative number", () => {
  expect(reverseInteger(-1234)).toEqual(-4321);
  expect(reverseInteger(-23)).toEqual(-32);
  expect(reverseInteger(-56)).toEqual(-65);
  expect(reverseInteger(-900)).toEqual(-9);
});
