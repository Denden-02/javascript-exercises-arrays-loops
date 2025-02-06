// create new array > prompts for elements with array length 4 
// > creates a function that removes elements in an array
        // create a new Array() which includes only the 'not removed' parts using the FOR loop

// let lst = new Array();
// let new_lst = function() {
//     for (let i=0;i<4;++i) {
//         lst.push(prompt("Enter array values:"));
//     }
// }



const removeFromArray = function(lst, first, second, third, fourth) {
    var arrayAdd = [];
    for (let item of lst) {
        if (item !== first && item !== second && item !== third && item !== fourth) {
            arrayAdd.push(item);
        }; 
    }
    return arrayAdd;
}

// removeFromArray([1, 2, 3, 4], 3, 2)
// // new_lst();
// console.log(`Length of lst array: ${lst.length} - ${lst}`);
// console.log(removeFromArray(lst, 1,2,3,4));
// console.log(arrayAdd);
 

// Do not edit below this line
module.exports = removeFromArray;
