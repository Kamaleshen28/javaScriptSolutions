function endsWithScriptRegular(str){
    return str.endsWith("Script");
}
console.log(endsWithScriptRegular("javaScript"))

//-------

const endsWithScriptArrow = (str) => {
    return str.endsWith("Script");
}
console.log(endsWithScriptArrow("javascript"))

module.exports = {endsWithScriptArrow, endsWithScriptRegular};