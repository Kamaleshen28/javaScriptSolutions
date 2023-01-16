
function isLeapYearRegular(year){
    return (year%400==0 || (year%4==0 && year%100!=0))? true: false;
}

console.log(isLeapYearRegular(2100));


//------

const isLeapYearArrow = (year) =>  (year%400==0 || (year%4==0 && year%100!=0))? true: false;
console.log(isLeapYearArrow(2000));

module.exports = {isLeapYearArrow, isLeapYearRegular};