const sumAll = function(start, end) {
    let sumArray = 0;

    //return error if parameters contains a negative number or non-number
    if (start < 0 || 
        end < 0 || 
        (typeof start) !== 'number' || 
        (typeof end) !== 'number') {
        return 'ERROR';
    };

    //swap the parameters if min > max
    if (start > end) {
        min = end;
        max = start;
    } else {
        min = start;
        max = end;
    };

    for (let i = min; i <= max; i++) {
        sumArray += i;
    };
    return sumArray;
};

// Do not edit below this line
module.exports = sumAll;