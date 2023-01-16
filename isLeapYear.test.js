const file = require('./isLeapYear')
const isLeapYearArrow = file.isLeapYearArrow;
const isLeapYearRegular = file.isLeapYearRegular;

test('Testing isLeapYearArrow function', () => {
    expect(isLeapYearArrow(2000)).toBe(true);
    expect(isLeapYearArrow(1998)).toBe(false);
    expect(isLeapYearArrow(2012)).toBe(true);
})

test('Testing longestStringRegular function', () => {
    expect(isLeapYearRegular(2013)).toBe(false);
    expect(isLeapYearRegular(2015)).toBe(false);
    expect(isLeapYearRegular(2016)).toBe(true);
})