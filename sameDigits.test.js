const file = require('./sameDigits')
const sameDigitsArrow = file.sameDigitsArrow;
const sameDigitsN = file.sameDigitsN;

test('Testing sameDigits Arrow function', ()=> {
    expect(sameDigitsArrow(22)).toBe(true)
    expect(sameDigitsArrow(23)).toBe(false)
    expect(sameDigitsArrow(11111112)).toBe(false)

})

test('Testing sameDigits Regular function', ()=> {
    expect(sameDigitsN(22)).toBe(true)
    expect(sameDigitsN(23)).toBe(false)
    expect(sameDigitsN(11111112)).toBe(false)

})