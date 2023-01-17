const timesNumbers = (numbers, times) => {
    if(!Array.isArray(numbers)){
        throw new Error('Input is not an array');
    }
    return numbers.map((num) => {
        if(typeof num === 'string'){
            throw new Error('Input only number array');
        }
        return times*num;
    });
};

const getEvenNumbers = (numbers) => {
    return numbers.filter((num) => num%2==0);
};

const getTripledEvenNumbers = (numbers, times) => {
    if(!Array.isArray(numbers)){
        throw new Error('Input is not an array');
    }
    const tripledNumbers = timesNumbers(numbers, times);
    return getEvenNumbers(tripledNumbers);
};

const getTripledEvenNumbersReduce = (numbers, times) => {
    if(!Array.isArray(numbers)){
        throw new Error('Input is not an array');
    }
    
    return numbers.reduce((accumulator, currentValue) => {
        const val = currentValue*times;
        if(typeof currentValue === 'string'){
            throw new Error('Input only number array');
        }
        if(val%2==0){
            return [...accumulator, val];
        }
        return accumulator;
    }, []);
};




module.exports = {timesNumbers, getTripledEvenNumbersReduce, getTripledEvenNumbers};
//console.log(doubleNumbers([1,2,3,4], 3))
//console.log(getEvenNumbers([1,2,3,4,5]))
//console.log(getTripledEvenNumbers([1,2,3,4,5], 3));
//console.log(getTripledEvenNumbersReduce([0,0,'a'], 3));
