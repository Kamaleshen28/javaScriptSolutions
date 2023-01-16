const file = require('./concatString')
const concatExceptFirstCharN = file.concatExceptFirstCharN;
const concatExceptFirstCharR = file.concatExceptFirstCharR;

test('Testing concatExceptFirstCharN function', () => {
    expect(concatExceptFirstCharN(["code", "academy"])).toBe("odecademy");
    expect(concatExceptFirstCharN(["EKamal", "Seshen"])).toBe("Kamaleshen");
    expect(concatExceptFirstCharN(["McKinsey&", "Company"])).toBe("cKinsey&ompany");
})

test('Testing endsWithScriptArrow function', () => {
    expect(concatExceptFirstCharR(["code", "academy"])).toBe("odecademy");
    expect(concatExceptFirstCharR(["EKamal", "Seshen"])).toBe("Kamaleshen");
    expect(concatExceptFirstCharR(["McKinsey&", "Company"])).toBe("cKinsey&ompany");
})