function replaceCharacterRegular(str){
    let result='';
    
    function fun(item){
        let char = item.charCodeAt(0);
        let k = String.fromCharCode((((char-64)%26)+65));
        let m = String.fromCharCode((((char-96)%26)+97));

        result = result + ( (char>=65 && char<=90)? k: m);
    }
    str.split('').forEach(fun);
    return result;
}
console.log(replaceCharacterRegular('codeacademy'));

//----------

const replaceCharacter = (str) => {
    let result='';
    
    const fun = (item) => {
        let char = item.charCodeAt(0);
        let k = String.fromCharCode((((char-64)%26)+65));
        let m = String.fromCharCode((((char-96)%26)+97));
        result = result.concat( (char>=65 && char<=90)? k: m);
    };
    str.split('').forEach(fun);
    return result;
};
console.log(replaceCharacter('lazyinterns'));

module.exports = {replaceCharacter, replaceCharacterRegular};


/*
    result = result + (char>=65 && char<=90)? k: m;
    Why this isn't working??

*/