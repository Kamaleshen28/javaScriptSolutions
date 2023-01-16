const file = require('./longestString');
const longestStringRegular = file.longestStringRegular;
const longestStringArrow = file.longestStringArrow;

test('Testing longestStringArrow function', () => {
    expect(longestStringArrow(["we", "love", "code", "academy"])).toBe("academy");
    expect(longestStringArrow(["we", "", "code", ""])).toBe("code");
    expect(longestStringArrow(["we", "Mckinsey&Company", "code", ""])).toBe("Mckinsey&Company");
})

test('Testing longestStringRegular function', () => {
    expect(longestStringRegular(["we", "love", "code", "academy"])).toBe("academy");
    expect(longestStringRegular(["we", "", "code", ""])).toBe("code");
    expect(longestStringRegular(["we", "Mckinsey&Company", "code", ""])).toBe("Mckinsey&Company");
})