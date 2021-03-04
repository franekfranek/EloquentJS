//Regexp golf

let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));



function verify(reg, valid, novalid) {
    for (s of valid) {
        if (!reg.test(s)) {
            console.log(`${s} do not match the regex.`);
        } 
    }

    for (s1 of novalid) {
        if (reg.test(s1)) {
            console.log(`Unexpectedly ${s1} does match the regex.`);
        } 
    }
}


// the letters 'ca' followed by one of 'r' or 't'
verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

// 'p' optionally followed by 'r' followed by 'op'
verify(/pr?op/,
    ["my pop", "bad prop"],
    ["poor", "high rope"]);

// 'ferr' followed by 'et' or 'y' or 'ari'
verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

// 'ious' followed by a word boundary 
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

// a whitespace character followed by one of '.' or ',' or ':'or ';' 
verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

// 7 or more word characters grouped together
verify(/\w{7,}/,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

// one or more words not containing an e
verify(/\b[^\We]+\b/,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape"]);




//Quoting style
let text = "'I'm the cook,' he said, 'it's my job.'";
// ' at begining of string or
// ' after non-word character or
// ' before non-word character or
// ' at and of string
console.log(text.replace(/^'|(\W)'|'(\W)|'$\b/g, "$1\"$2"));
// → "I'm the cook," he said, "it's my job."



//Numbers again
// TODO: UNDERSTAND
// regular expression:
// at the beginning of the number, optionally have '+' or '-'
// followed by a decimal or integer number:
//     one or more digits optionally followed by a decimal point followed by zero or more digits, or
//     a decimal point followed by one or more digits
// followed by (optionally) at the end of the number:
//     'e' followed by 
//     '+' or '-' (optional), followed by
//     one or more digits
// everything is case-insensitive (i) so 'e' or 'E' are both acceptable
let number = /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
    "1.3e2", "1E-4", "1e+12"]) {
    if (!number.test(str)) {
        console.log(`Failed to match '${str}'`);
    }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
    ".5.", "1f5", "."]) {
    if (number.test(str)) {
        console.log(`Incorrectly accepted '${str}'`);
    }
}