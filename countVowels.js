function countVowelsRegular(str){
    let count=0;
    const vowels = 'aeiou';
    str.split('').forEach(fun);

    function fun(item){
        count = count + ((vowels.indexOf(item) !=-1 )? 1: 0); 
    }
    return count;
}
console.log(countVowelsRegular('codeacademy'));

const countVowelsArrow = (str) => {
    let count=0;
    const vowels = 'aeiou';

    const fun = (item) => count = (vowels.indexOf(item) !=-1 )? count+1: count; 
    
    str.split('').forEach(fun);
    return count;
};
console.log(countVowelsArrow('kamal'));

module.exports = {countVowelsArrow, countVowelsRegular};