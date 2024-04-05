const anagrams = require("./index");

test('"elbow" is an anagram of "below"', () => {
  expect(anagrams("elbow", "below")).toBe(true);
});

test('"gentleman" is an anagram of "elegant man"', () => {
  expect(anagrams("a gentle man", "elegant man")).toBe(true);
});

test('"Fourth of July" is an anagram of "joyful Fourth"', () => {
  expect(anagrams("Fourth of July", "joyful Fourth")).toBe(true);
});

test('"David Bragg" is an anagram of "Frontend Simplified"', () => {
  expect(anagrams("David Bragg", "Frontend Simplified")).toBe(false);
});

test('"act" is not an anagram of "cats"', () => {
  expect(anagrams("act", "cats")).toBe(false);
});
