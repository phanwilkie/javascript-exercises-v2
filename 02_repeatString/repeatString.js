const repeatString = function(word, number) {
    let finalWord = '';
    if (number < 0) {
        return 'ERROR';
    }
    else {
        for (i = 0; i < number; i++) {
            finalWord += word;
        };
        return finalWord;
    
    };
};

// Do not edit below this line
module.exports = repeatString;
