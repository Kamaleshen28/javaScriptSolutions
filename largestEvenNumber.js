function largestEvenNumberN(numbers){
    let resultN = Number.MIN_SAFE_INTEGER;

    function funNormal(item){
        resultN = ( (item%2==0 && item>resultN)?item:resultN  );
    }

    numbers.forEach(funNormal);
    return (resultN===Number.MIN_SAFE_INTEGER)? -1: resultN;
}

console.log( largestEvenNumberN([1,5,3,-7,5]));

//----------------------------------------------

const largestEvenNumberA = (numbers) => {
    let resultA = Number.MIN_SAFE_INTEGER;

    const funArrow =  (item) => {
        resultA = ( (item%2==0 && item>resultA)?item:resultA );
    }
    numbers.forEach(funArrow);
    return (resultA===Number.MIN_SAFE_INTEGER)? -1: resultA;
}


console.log( largestEvenNumberA([1,2,3,4,5]));
module.exports =  {largestEvenNumberA, largestEvenNumberN};