const repeatString = function(string, num) {
    let strRepeat = "";
    if (num !== +num || num < 0) {
        return `ERROR`
    // if (num == NaN) return `Please input a valid number in 2nd argument.`;
    } else 
        for (i= num;i>0;--i) {
            strRepeat += string;}
    return strRepeat;
};



// Do not edit below this line
module.exports = repeatString;
