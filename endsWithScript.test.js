const file = require('./endsWithScript')
const endsWithScriptArrow = file.endsWithScriptArrow;
const endsWithScriptRegular = file.endsWithScriptRegular;

test('Testing endsWithScriptArrow function', () => {
    expect(endsWithScriptArrow("javaScript")).toBe(true);
    expect(endsWithScriptArrow("Script")).toBe(true);
    expect(endsWithScriptArrow("script")).toBe(false);
})

test('Testing endsWithScriptRegular function', () => {
    expect(endsWithScriptRegular("javaScript")).toBe(true);
    expect(endsWithScriptRegular("Script")).toBe(true);
    expect(endsWithScriptRegular("script")).toBe(false);
})