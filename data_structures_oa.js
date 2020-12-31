// The sum of a range
var range = (start, end) => {
    let result = [];
    for (; start <= end; start++) {
        result.push(start);
    }
    return result;
}

var range2 = (start, end, step = 1) => {
    if (start > end && step < 0) {
        return rangeNegative(start, end, step);
    }
    let result = [];
    for (; start <= end; start += step) {
        result.push(start);
    }
    return result;
}

var rangeNegative = (start, end, step) => {
    let result = [];
    for (; start >= end; start += step) {
        result.push(start);
    }
    return result;
}

var sum = (arr) => {
    let result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}


// according to http://eloquent-javascript-solutions.urry.me/
// step parameter is optional
// if step is not passed in, 
// and start is less than or equal to end, 
// then step = 1, else step = -1
function range3(start, end, step = start <= end ? 1 : -1) {
    let result = [];
    // loop iterates up for positive step values
    // and iterates down for negative step values
    for (let i = start; step >= 0 ? i <= end : i >= end; i += step) {
        result.push(i);
    }
    return result;
}

function sum(numbers) {
    result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}


// Reversing an array
var reverseArray = (arr) => {
    let result = [];
    for (var i = arr.length -1 ; i >= 0 ; i--) {
        result.push(arr[i]);
    }
    return result;
}                         


var reverseArrayInPlace = (arr) => {
    let i = 0;
    let j = arr.length - 1;

    while (i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

// [1] - [2,1] - [3,2,1]
function reverseArray2(array) {
    result = [];
    for (let item of array) {
        result.unshift(item);
    }
    return result;
}

function reverseArrayInPlace2(array) {
    let len = array.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        console.log(i, len - i - 1, array[i], array[len - i - 1], array);
        let swap = array[i];
        array[i] = array[len - i - 1];
        array[len - i - 1] = swap;
    }
    return array;
}

function reverseArrayInPlace3(arr){
    for (let i of [...arr]) {
        arr.unshift(i)
        arr.pop()
    }
}

// A list
function arrayToList(array) {
    let result = {};
    if (Array.isArray(array)) {
        let currListItem = result;
        for (let item of array) {
            let newListItem = {
                value: item,
                rest: null
            };
            if (typeof currListItem.rest === 'undefined') {
                result = newListItem;
            } else {
                currListItem.rest = newListItem;
            }
            currListItem = newListItem;
        }
    }
    return result;
}

function arrayToList2(array) {
    var list = null;

    for (var i = array.length - 1; i >= 0; i--)
        list = {
            value: array[i],
            rest: list
        };
    return list;
}

var listToArray = (list) => {
    let result = [];
    if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
        return result;
    } else {
        result.push(list.value);
        while (list.hasOwnProperty('rest') && list.rest !== null) {
            list = list.rest;
            if (list.hasOwnProperty('value')) {
                result.push(list.value);
            }
        }
    }
    return result;
}

var listToArray2 = (list) => {
    let result = [];
    let p = list;
    while (p) {
        result.push(p.value);
        p = p.rest;
    }
}


var prepend = () => {

}

var nth = () => {

}



// Deep comparison
var deepEqual = (a, b) => {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

function deepEqual2(a, b) {
    if (a === b) {
        // items are identical
        return true;
    } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
        // items are objects - do a deep property value compare
        // join keys from both objects together in one array
        let keys = Object.keys(a).concat(Object.keys(b));
        // filter out duplicate keys
        keys = keys.filter(
            //self is the same all the time
            // it compares first occurence with current index
            // so anything what is the same but not first in arrat is returned as false
            function (value, index, self) {
                console.log(value, index, self);
                return self.indexOf(value) === index;
            }
        );
        for (p of keys) {
            if (typeof a[p] === 'object' && typeof b[p] === 'object') {
                if (deepEqual2(a[p], b[p]) === false) {
                    return false;
                }
            } else if (a[p] !== b[p]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual2(obj, { here: { is: "another" }, object: 2 }));
