const file = require('./largestEvenNumber');
const largestEvenNumberArrow = file.largestEvenNumberA;
const largestEvenNumberRegular = file.largestEvenNumberN;


test('Testing largestEvenNumberArrow function', ()=>{
    expect(largestEvenNumberArrow([1, 2, 3, 4, 5])).toBe(4);
    expect(largestEvenNumberArrow([1, 3, 5, 7])).toBe(-1);
    expect(largestEvenNumberArrow([1, 3, -4, -8])).toBe(-4);
})

test('Testing largestEvenNumberRegular function', ()=>{
    expect(largestEvenNumberRegular([1, 2, 3, 4, 5])).toBe(4);
    expect(largestEvenNumberRegular([1, 3, 5, 7])).toBe(-1);
    expect(largestEvenNumberRegular([1, 3, -4, -8])).toBe(-4);
})