const palindrome = require("./index");

test('"23432" a palindrome', () => {
  expect(palindrome("23432")).toBeTruthy();
});

test('"david" is not a palindrome', () => {
  expect(palindrome("david")).toBeFalsy();
});

test('"racecar" is a palindrome', () => {
  expect(palindrome("racecar")).toBeTruthy();
});

test('"frontend simplified" is not a palindrome', () => {
  expect(palindrome("frontend simplified")).toBeFalsy();
});

test('"Dog goD" is not a palindrome', () => {
  expect(palindrome("Dog goD")).toBeTruthy();
});
