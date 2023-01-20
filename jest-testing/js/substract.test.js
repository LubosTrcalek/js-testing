const substract = require("./substract");

test("properly substracting two numbers", () => {
    expect(substract(1, 2)).toBe(-1);
});
