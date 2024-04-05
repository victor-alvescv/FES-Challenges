const capitalize = require("./index");

test("Capitalizes the first letter of each word in a sentence", () => {
  expect(capitalize("hi there, my name is david")).toEqual(
    "Hi There, My Name Is David"
  );
});

test("Capitalizes the first letter of each word in a sentence", () => {
  expect(capitalize("i hope you are enjoying the course")).toEqual(
    "I Hope You Are Enjoying The Course"
  );
});
