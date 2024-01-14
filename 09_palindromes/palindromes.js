const palindromes = function (a) {

    const string = a.toLowerCase();
    const punctuations = /[\.,?! ]/g;
    const originalString = string.replace(punctuations, "");
    const lettersArray = originalString.split('');
    const reversedArray = [...lettersArray].reverse();
    const value1 = lettersArray.join('');
    const value2 = reversedArray.join('');

    if (value1 === value2) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
