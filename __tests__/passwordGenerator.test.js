// __tests__/passwordGenerator.test.js

const { generatePassword, parseArguments } = require("../passwordGenerator");

describe("generatePassword", () =>
{
    test("The generated password is of the correct length", () =>
    {
        const length = 10;
        const password = generatePassword(length, true, true);
        expect(password.length).toBe(length);
    });

    test("The generated password only uses lowercase when no parameters are selected", () =>
    {
        const password = generatePassword(6, false, false);
        expect (/^[a-z]+$/.test(password)).toBe(true);
    });

    test("The generated password only uses numbers when it is true and lowercase isn't", () =>
    {
        const password = generatePassword(12, false, true);
        expect (/[a-z]/.test(password)).toBe(false);
        expect (/[0-9]/.test(password)).toBe(true);
    });

    test("The generated password only uses lowercase when it is true and numbers are not", () =>
    {
        const password = generatePassword(16, true, false);
        expect (/[a-z]/.test(password)).toBe(true);
        expect (/[0-9]/.test(password)).toBe(false);
    });

    test("The generated password uses both lowercase and numbers when both parameters are true", () =>
    {
        const password = generatePassword(20, true, true);
        expect (/[a-z]/.test(password)).toBe(true);
        expect (/[0-9]/.test(password)).toBe(true);
    });

        test("An error is thrown if generated password length is invalid (Not between 4-24)", () =>
    {
        expect(() =>generatePassword(3, true, true)).toThrow();

        expect(() =>generatePassword(25, true, true)).toThrow();

        expect(() => generatePassword(22, false, true)).not.toThrow();
        const valid = generatePassword(22, false, true);
        expect(valid.length).toBe(22);

    });
});

