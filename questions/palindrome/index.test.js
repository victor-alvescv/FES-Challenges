const palindrome = require("./index");

test('"abba" is a palindrome', () => {
  expect(palindrome("abba")).toBeTruthy();
});

test('"abcba" is a palindrome', () => {
  expect(palindrome("abcba")).toBeTruthy();
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

test('"Dog goD" is a palindrome', () => {
  expect(palindrome("Dog goD")).toBeTruthy();
});
