const file = require('./changeCapitalization');
const changeCapitalizationArrow = file.changeCapitalizationArrow;
const changeCapitalizationRegular = file.changeCapitalizationRegular;

test('Testing changeCapitalizationArrow function', () => {
    expect(changeCapitalizationArrow("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
    expect(changeCapitalizationArrow("KamalESHEN")).toBe("kAMALeshen");
    expect(changeCapitalizationArrow("abcdef")).toBe("ABCDEF");
})

test('Testing changeCapitalizationRegular function', () => {
    expect(changeCapitalizationRegular("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
    expect(changeCapitalizationRegular("KamalESHEN")).toBe("kAMALeshen");
    expect(changeCapitalizationRegular("abcdef")).toBe("ABCDEF");
})