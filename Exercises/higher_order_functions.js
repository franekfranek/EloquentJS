//Flattening
var flatten = (arr) => {
    //return arr.reduce((arr1, next) => arr1.filter(x => x > 1).concat(next)); add only element bigger than 1 to the result
    return arr.reduce((flat, current) => flat.concat(current), []);

} 
// [[1, 2], [3, 4], [5, 6]]

// Your own loop
var loop = (val, test, update, body) => {
    for (var i = val; test(i); i =  update(i)) {
        body(i);
    }
}

//recursive
var loop2 = (val, test, update, body) => {
    if (!test(val)) return;
    body(val);
    return loop2(update(val), test, update, body);
}


loop2(3, n => n > 0, n => n - 1, console.log);

//function map(array, transform) {
//    let mapped = [];
//    for (let element of array) {
//        mapped.push(transform(element));
//    }
//    return mapped;
//}
    
// Everything
var every = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) return false;
    }
    return true;
}

var every2 = (arr, callback) => {
    return !arr.some(el => !callback(el));
}

every2([1, 3, 4], (x) => x % 2 === 0)

// Dominant writing direction


let c = [1, 2, 3, 4, 5].reduce((acc, current, index, arr) => acc + current, 1000);
console.log(c);