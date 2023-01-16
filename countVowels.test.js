const file = require('./countVowels')
const countVowelsArrow = file.countVowelsArrow;
const countVowelsRegular = file.countVowelsRegular;

test('Testing countVowelsArrow function', () => {
    expect(countVowelsArrow("codeacademy")).toBe(5);
    expect(countVowelsArrow("kamal")).toBe(2);
    expect(countVowelsArrow("McKinsey")).toBe(2);
})

test('Testing countVowelsRegular function', () => {
    expect(countVowelsRegular("codeacademy")).toBe(5);
    expect(countVowelsRegular("kamal")).toBe(2);
    expect(countVowelsRegular("McKinsey")).toBe(2);
})