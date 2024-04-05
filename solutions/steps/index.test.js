const steps = require("./index");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("number of steps entered = 1", () => {
  steps(1);
  expect(console.log.mock.calls[0][0]).toEqual("#");
});

test("number of steps entered = 3", () => {
  steps(3);
  expect(console.log.mock.calls[0][0]).toEqual("#  ");
  expect(console.log.mock.calls[1][0]).toEqual("## ");
  expect(console.log.mock.calls[2][0]).toEqual("###");
});

test("number of steps entered = 5", () => {
  steps(5);
  expect(console.log.mock.calls[0][0]).toEqual("#    ");
  expect(console.log.mock.calls[1][0]).toEqual("##   ");
  expect(console.log.mock.calls[2][0]).toEqual("###  ");
  expect(console.log.mock.calls[3][0]).toEqual("#### ");
  expect(console.log.mock.calls[4][0]).toEqual("#####");
});
