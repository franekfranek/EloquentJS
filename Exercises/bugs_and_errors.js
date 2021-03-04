// RETRY

class MultiplicatorUnitFailure extends Error { }

let getRandomNumer = (range) => {
    let choice = Math.floor(Math.random() * range);
    return choice;
} 

let primitiveMultiply = (a, b) => {
    
    let randomNumber = getRandomNumer(5);

    if (randomNumber === 0) {
        return a * b;
    }
    else {
        throw new MultiplicatorUnitFailure();
    }
}

let keepTrying = (a, b) =>{
    while (true) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure) {
                console.log("Failed. Try again.");
            }
        }
    }
}
// recursion

function primitiveMultiply2(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            return reliableMultiply2(a, b);
        } else {
            throw e;
        }
    }
}

//The locked box
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let boxLockedOnEntry = box.locked;
    if (boxLockedOnEntry) {
        box.unlock();
    }
    try {
        body();
    } finally {
        if (boxLockedOnEntry) {
            box.lock();
        }
    }
}

// try with the box locked
withBoxUnlocked(function () {
    box.content.push("gold piece");
});

// check that box is still locked after adding gold piece
console.log(box.locked);
// → true

// try with locked box that raises error once opened
try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

// check that box is still locked after error
console.log(box.locked);
// → true

// unlock the box
box.unlock();
// add silver piece to box that is unlocked
withBoxUnlocked(function () {
    box.content.push("silver piece");
});

// check that box is still unlocked after adding silver piece
console.log(box.locked);
// → flase

// raise error on unlocked box
try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

// check that box is still unlocked after error
console.log(box.locked);
// → false