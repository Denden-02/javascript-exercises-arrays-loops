//getYear value, first check if number is integer and 4 in length
// check for the 3 conditionals for leap year: - getYear > 99 && getYear % 4 == 0 && !getYear % 100 == 0 && getYear % 400 == 0;
// return true if goods

const leapYears = function(getYear) {
    // while (true) {
    //     getYear = +(prompt("Input year: "));
    //     if (!Number.isInteger(getYear)) {
    //         alert('Please enter a valid year');
    //             continue;
    //     } else break;
    // };
    if (getYear > 99 && getYear % 4 == 0 && !(getYear % 100 == 0)) {
        return true;
    } else if (getYear % 100 == 0 && getYear % 400 == 0) {
        return true;
    } else return false;
};

// Do not edit below this line

module.exports = leapYears;
