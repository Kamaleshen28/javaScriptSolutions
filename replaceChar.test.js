const file = require('./replaceChar')
const replaceCharacter = file.replaceCharacter;
const replaceCharacterRegular = file.replaceCharacterRegular;

test('Testing replaceCharacter function', () => {
    expect(replaceCharacter("codeacademy")).toBe("dpefbdbefnz");
    expect(replaceCharacter("lazyinterns")).toBe("mbazjoufsot");
    expect(replaceCharacter("McKinsey")).toBe("NdLjotfz");
})

test('Testing replaceCharacterRegular function', () => {
    expect(replaceCharacterRegular("codeacademy")).toBe("dpefbdbefnz");
    expect(replaceCharacterRegular("lazyinterns")).toBe("mbazjoufsot");
    expect(replaceCharacterRegular("McKinsey")).toBe("NdLjotfz");
})