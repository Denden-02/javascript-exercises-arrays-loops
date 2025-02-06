const reverseString = function(Str) {
    let revString = '';
    // use short-circuit conditionals
    if (!Str && Str !== '') {
        return 'Please input a valid argument';
    } 
    Str = Str.toString();  
    for (let i=-1;i >= -Str.length; --i) revString += Str.at(i);
    return revString;
    // or use return Str.split("").reverse("").join("") which uses ARRAY to split the string into parts, reverse the array, and concat array elements using join()
};

// Do not edit below this line
module.exports = reverseString;
