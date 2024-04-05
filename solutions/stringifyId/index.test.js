const stringifyId = require("./index");

test("stringifies one id", () => {
  expect(stringifyId([{ id: 1 }])).toEqual("1");
});

test("stringifies three id's", () => {
  expect(stringifyId([{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }])).toEqual(
    "1, 2, 3"
  );
});

test("stringifies complex id's", () => {
  expect(
    stringifyId([
      { id: 10, name: "David", job: "Frontend Developer" },
      { id: 10, name: "Bragg", job: "Frontend Instructor" },
      { id: 20, name: "John", job: "Junior Developer" },
      { id: 20, name: "Doe", job: "Senior Developer" },
    ])
  ).toEqual("10, 20");
});
