const testingPractice = require("../src/index")

describe("capitalize", () => {
    test("capitalizes first character", () => {
        expect(testingPractice.capitalize("hello world")).toBe("Hello world");
    })
    test("capitalizes the character if there's only one", () => {
        expect(testingPractice.capitalize("a")).toBe("A");
    })
    test("do nothing if it's empty string", () => {
        expect(testingPractice.capitalize("")).toBe("");
    })
    test("do nothing if first letter of string is already capitalized", () => {
        expect(testingPractice.capitalize("Hello")).toBe("Hello");
    })
})

describe("reverseString", () => {
    test("reverses a string", () => {
        expect(testingPractice.reverseString("hello")).toBe("olleh");
    })
    test("do nothing if it's empty string", () => {
        expect(testingPractice.reverseString("")).toBe("");
    })
    test("do nothing if first letter of string is already capitalized", () => {
        expect(testingPractice.reverseString("Hello!")).toBe("!olleH");
    })
})

describe("calculator", () => {
    test("addition", () => {
        expect(testingPractice.calculator.add(2, 2)).toBe(4);
    })
    test("subtract", () => {
        expect(testingPractice.calculator.subtract(2, 3)).toBe(-1);
    })
    test("divide", () => {
        expect(testingPractice.calculator.divide(4, 2)).toBe(2);
    })
    test("multiply", () => {
        expect(testingPractice.calculator.multiply(4, 2)).toBe(8);
    })
})

describe("ceasarCipher", () => {
    test("shifts each character by the shift factor", () => {
        expect(testingPractice.ceasarCipher("hello world", 3)).toBe("khoor zruog");
    })
    test("wraps from z to a", () => {
        expect(testingPractice.ceasarCipher("Z", 1)).toBe("A");
    })
    test("keeps the same case", () => {
        expect(testingPractice.ceasarCipher("Hello world", 3)).toBe("Khoor zruog");
    })
    test("handles punctuation", () => {
        expect(testingPractice.ceasarCipher("Hello world!", 3)).toBe("Khoor zruog!");
    })
})

describe("analyzeArray", () => {
    test("calculates average, min, max and length of array", () => {
        expect(testingPractice.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    })
    test("calculates average, min, max and length of array with negative values", () => {
        expect(testingPractice.analyzeArray([-1, 0, 1])).toEqual({
            average: 0,
            min: -1,
            max: 1,
            length: 3
        });
    })
    test("return empty object for an empty array", () => {
        expect(testingPractice.analyzeArray([])).toEqual({
            average: NaN,
            min: Infinity,
            max: -Infinity,
            length: 0
        });
    })
})