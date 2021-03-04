// minimum
var min = function(num1, num2) {
    return num1 > num2 ? num2 : num1;
}

//recursion
// it important to return !!!

var isOdd = function(number) {
    if (number === 0) return true;
    if (number === 1) return false;
    if (number < 0)
        return "??";
    else return isOdd(number - 2);
}

// Bean counting
var countBs = (str) => {
    counter = 0;
    for (c of str) {
        if (c === "B") counter++;
    }
    return counter;
}

var countChar = (str, char) => {
    counter = 0;
    for (c of str) {
        if (c === char) counter++;
    }
    return counter;
}

console.log(countChar("bubSS", "u"));


