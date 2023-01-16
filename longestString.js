function longestStringRegular(arrStr){
    let result = "";
    arrStr.forEach(fun);

    function fun(item){
        result = (result.length < item.length)? item: result;
    }
    return result;
}
console.log(longestStringRegular(["we", "love", "code", "academy"]))

//---------

const longestStringArrow = (arrStr) => {
    let result = "";

    const fun = (item) => result = (result.length < item.length)? item: result;

    arrStr.forEach(fun);
    return result;
}
console.log(longestStringArrow(["we", "", "code", ""]))

module.exports = {longestStringArrow, longestStringRegular};