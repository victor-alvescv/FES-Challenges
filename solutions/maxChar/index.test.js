const maxCharacters = require("./index");

test("returns the most commonly used character", () => {
  expect(maxCharacters("b")).toEqual("b");
  expect(maxCharacters("bbbfewsbbbswbbb")).toEqual("b");
});

test("returns the most commonly used number", () => {
  expect(maxCharacters("s1mpl1f1ed")).toEqual("1");
});
