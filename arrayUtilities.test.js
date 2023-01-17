const {timesNumbers, getTripledEvenNumbersReduce, getTripledEvenNumbers} = require('./arrayUtilities');

describe('Array Utilities', () => {
    describe('timesNumbers', () => {
        it('should double the elements when the input is an array', ()=> {
            const result = timesNumbers([1,2,3], 2);
            expect(result).toEqual([2,4,6]);
        })
        it('should throw error when the input is not an array', ()=> {
            expect(()=>timesNumbers(12)).toThrow('Input is not an array');
        })

    })
    describe('getTripledEvenNumbersReduce', () => {
        it('should triple the elements and return the even numbers when the input is an array', ()=> {
            const result = getTripledEvenNumbersReduce([1,2,3], 3);
            expect(result).toEqual([6]);
        })
        it('should throw error when the input is not an array', ()=> {
            expect(()=>getTripledEvenNumbersReduce(12, 3)).toThrow('Input is not an array');
        })
        it('should throw error when the input array contains strings', () => {
            expect(() => getTripledEvenNumbersReduce([0,0,"a"], 3)).toThrow('Input only number array');
        })

    })
    describe('getTripledEvenNumbers', () => {
        it('should triple the elements and return the even numbers when the input is an array', ()=> {
            const result = getTripledEvenNumbers([1,2,3], 3);
            expect(result).toEqual([6]);
        })
        it('should throw error when the input is not an array', ()=> {
            expect(()=>getTripledEvenNumbers(12, 3)).toThrow('Input is not an array');
        })
        it('should throw error when the input array contains strings', () => {
            expect(() => getTripledEvenNumbers([0,0,"a"], 3)).toThrow('Input only number array');
        })

    })

})