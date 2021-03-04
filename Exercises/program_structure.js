//Looping a triangle

let triangle = (number) => {
    for (let i = 1; i < number + 1; i++) {
        let x = "#".repeat(i);
        console.log(x);
    }
}

let triangle2 = (number) => {
    for (var triangle = "#"; triangle.length <= number; triangle += "#")
        console.log(triangle);
}

let triangle3 = (number) => {
    var x = '';
    for (let i = 0; i < number; i++){
        x = '#' + x;
        console.log(x);
    }
}

let triangle4 = (number) => {
    return Array(number).fill().map((_, i) => '#'.repeat(i + 1)).join('\n');
}

// FizzBuzz

let fizzBuzz = (number) => {
    if (isNaN(number) || number <= 0) return "";

    for (var i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz", i);
        else if (i % 3 === 0) console.log("Fizz", i);
        else if (i % 5 === 0) console.log("Buzz", i);
        else console.log(i);
    }
}

let fizzBuzz2 = (number) => {
    if (isNaN(number) || number <= 0) return "";

    for (var i = 1; i <= number; i++) {
        var output = "";
        if (i % 3 === 0)
            output = "Fizz";
        if (i % 5 === 0)
            output += ("Buzz");
        console.log(output || i);
    }
}

// Chessboard

let chessBoard = () => {
    var gridSize = Number(prompt("Enter size of grid", "8"));
    // plus gridSize bc first line is empty
    var totalSize = (gridSize * gridSize) + gridSize;
    var grid = "";
    for (i = 0; i < totalSize; i++) {
        if (i % (gridSize + 1) == 0)
            grid += "\n";
        else if (i % 2 == 0)
            grid += "#";
        else
            grid += " ";
    }
    console.log(grid);
}

// brute force
let chessBoard2 = (size) => {
    let row = "";
    let mainCounter = 0;
    for (let i = 1; i <= size * size; i++) {
        if (mainCounter % 2 == 0) {
            if (i % 2 === 0) {
                row += "#";
            }
            else row += " ";
        }
        else {
            if (i % 2 === 0) {
                row += " ";
            }
            else row += "#";
        }
        
        if (i % 8 === 0) {
            if (mainCounter === 0) mainCounter = 1
            else mainCounter = 0;
            row += "\n";
        }
    }
    console.log(row);
}


//nestes loop
// outer loop is odd or even every iteration
let chessBoard3 = (size) => {
    var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

    for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
        for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
            if ((x + y) % 2 === 0)
                board += " ";
            else
                board += "#";
        }
        board += "\n";
    }

    console.log(board);
}



//chessBoard();
//chessBoard2(8);