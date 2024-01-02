const reverseString = function(string) {
    let finalString = '';
    for (i = string.length; i >= 1; i--) {
        letter = string[i-1];
        finalString += letter;
    }
    return finalString;
    
};

// Do not edit below this line
module.exports = reverseString;
