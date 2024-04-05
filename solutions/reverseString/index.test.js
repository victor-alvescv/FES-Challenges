const reverseString = require("./index");

test("Given a String to be reversed", () => {
  expect(reverseString("david")).toEqual("divad");
});

test("Given a String with spaces to be reversed", () => {
  expect(reverseString("frontend")).toEqual("dnetnorf");
});

test("Given a String with spaces to be reversed", () => {
  expect(reverseString("frontend simplified")).toEqual("deifilpmis dnetnorf");
});
