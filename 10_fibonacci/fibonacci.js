const fibonacci = function(number) {
let fiboArray = [0];
Number(number);

if (number < 0) {
    return "OOPS";
} else {
    for (i = 1; i < number + 1; i++) { //stop once position is reached
        if (fiboArray.length === 1) {
            fiboArray.push(1);
        } else {
            fiboArray.push(fiboArray[i-1] + fiboArray[i-2]); //add to array
        };
    };
};
return fiboArray[number];
};

// Do not edit below this line
module.exports = fibonacci;
