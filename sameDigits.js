function sameDigitsN(number){
    const digit = (number%10).toString();
    let result = true;
    const str = (number.toString()).split('');
    str.forEach(fun);

    function fun(item){
        if(item!=digit){
            result = false;
            return ;
        }
    }
    return result;

}
console.log(sameDigitsN(2222));

//------ 

const sameDigitsArrow = (number) => {
    const digit = (number%10).toString();
    let result = true;
    const str = (number.toString()).split('');

    const fun = (item) => {
        if(item!=digit){
            result = false;
            return ;
        }
    };

    str.forEach(fun);

    return result;
};
console.log(sameDigitsArrow(2922));

module.exports = {sameDigitsArrow, sameDigitsN};