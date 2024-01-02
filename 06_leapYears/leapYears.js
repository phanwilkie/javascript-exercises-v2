const leapYears = function(year) {
    //if year's last 2 digits end with 00
    // % 400 === 0; else it's not a leap year
    if (String(year).slice(-2) == '00') {
        if (year % 400 === 0) {return true;} else { return false; }
    }
    //if year's last 2 digits does NOT end with 00
    // % 4 === 0; else it's not a leap year
    else { 
        if (year % 4 === 0) { return true; } else { return false; }
    };
 

};

// Do not edit below this line
module.exports = leapYears;

//better and leaner solution below:
//return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
