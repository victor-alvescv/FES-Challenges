const pyramid = require("./index");

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});

test("number entered = 1", () => {
  pyramid(1);
  expect(console.log.mock.calls[0][0]).toEqual("#");
});

test("prints a pryamid for n = 3", () => {
  pyramid(3);
  expect(console.log.mock.calls[0][0]).toEqual("  #  ");
  expect(console.log.mock.calls[1][0]).toEqual(" ### ");
  expect(console.log.mock.calls[2][0]).toEqual("#####");
});

test("prints a pryamid for n = 5", () => {
  pyramid(5);
  expect(console.log.mock.calls[0][0]).toEqual("    #    ");
  expect(console.log.mock.calls[1][0]).toEqual("   ###   ");
  expect(console.log.mock.calls[2][0]).toEqual("  #####  ");
  expect(console.log.mock.calls[3][0]).toEqual(" ####### ");
  expect(console.log.mock.calls[4][0]).toEqual("#########");
});
