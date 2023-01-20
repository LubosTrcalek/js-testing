const sum = require("./sum");

test("properly adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
});

describe("sum two numbers", () => {
    it("sum of none numbers", () => {
        expect(sum()).toBeNaN();
    });

    it("sum of 1 and 2 should be 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
