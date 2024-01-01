const reverseString = function(string) {
    //get string
    let finalString = '';
    // let string = 'hello';
    
    for (i = string.length; i >= 1; i--) {
    //iterate by decrementing from max length
    //grab char and append to finalString based on max length
        letter = string[i-1];
        finalString += letter;
    }
    return finalString;
    
};

// Do not edit below this line
module.exports = reverseString;
