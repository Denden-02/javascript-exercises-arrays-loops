// if NaN, float, negative numbers, & strings, result is 'ERROR'
// create let variables for the two arguments (must be integers)
// Large number comes last in argument (use IF)
const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a < 0 || b < 0) {
            return 'ERROR';
        } else if (a <= b) {
            let smallerNum = a;
            let biggerNum = b;
            let sumNum = 0;
            for (; a <= b ; ++a) {
                sumNum += a;
            }
            return sumNum;
        } else if (a >= b) {
            let smallerNum = b;
            let buggerNum = a;
            let sumNum = 0;
            for (; b <= a ; ++b) {
                sumNum += b;
            }
            return sumNum;
        }
    } else return 'ERROR'

};

// Do not edit below this line
module.exports = sumAll;
