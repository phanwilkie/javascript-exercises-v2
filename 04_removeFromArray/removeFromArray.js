//checking for elements (num) in myValues that are not present in the myRemove array. 
//It filters out those elements from myValues and returns a new array containing only 
//the elements that satisfy this condition

const removeFromArray = function(myValues, ...myRemove) {
    return myValues.filter(num => !myRemove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;