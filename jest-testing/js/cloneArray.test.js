const cloneArray = require("./cloneArray");

test("properly clones array", () => {
    const array = [1, 2, 3];
    expect(cloneArray(array)).toStrictEqual(array);
    expect(cloneArray(array)).not.toBe(array);
});

// describe("properly clones array", () => {
//     let array = [];

//     beforeEach(() => {
//         array = [1, 2, 3];
//     });

//     it("clones array", () => {
//         expect(cloneArray(array)).toStrictEqual(array);
//     });

//     it("clones array", () => {
//         expect(cloneArray(array)).not.toBe(array);
//     });
// });
