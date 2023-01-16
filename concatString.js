function concatExceptFirstCharR(arrStr){
    return arrStr[0].slice(1)+arrStr[1].slice(1);
}
console.log(concatExceptFirstCharR(["code", "academy"]));

//--------

const concatExceptFirstCharN = (arrStr) => arrStr[0].slice(1)+arrStr[1].slice(1);
console.log(concatExceptFirstCharN(["EKamal", "Seshen"]));

module.exports ={concatExceptFirstCharN, concatExceptFirstCharR};