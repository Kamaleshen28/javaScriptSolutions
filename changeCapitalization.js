
function changeCapitalizationRegular(str){
    let result="";
    str.split('').forEach(fun);

    function fun(item){
        let char = item.charCodeAt(0);

        result =  (char>=65 && char<=90)? result+item.toLowerCase(): 
            (
                (char>=97 && char<=122)? result+item.toUpperCase(): result+item
            );
    }
    return result;
}
console.log(changeCapitalizationRegular("MeRRy hAD a LITTle lAMp"))

//------

const changeCapitalizationArrow = (str) => {
    let result="";

    const fun = (item) => {
        let char = item.charCodeAt(0);

        result =  (char>=65 && char<=90)? result+item.toLowerCase(): 
            (
                (char>=97 && char<=122)? result+item.toUpperCase(): result+item
            );
    }
    str.split('').forEach(fun);
    return result;
}
console.log(changeCapitalizationArrow("KamalESHEN"))

module.exports = {changeCapitalizationRegular, changeCapitalizationArrow};