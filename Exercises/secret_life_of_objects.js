//A vector type
//To compute the distance from (0, 0) to (x, y),
//you can use the Pythagorean theorem,
//which says that the square of the distance we are looking for is equal to the square of the
//x - coordinate plus the square of the 
// y - coordinate.Thus, √(x2 + y2) is the number you want, and Math.sqrt(square root in JavaScript)

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    plus(v1) {
        return new Vec(v1.x + this.x, v1.y + this.y)
    };

    minus(v2) {
        return new Vec(v2.x - this.x, v2.y - this.y)
    };
}

//console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
//console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
//console.log(new Vec(3, 4).length);
// → 5


//Groups    
class Group {
    constructor() {
        this.data = [];
    }

    add(member) {
        if (!(this.data.includes(member))) this.data.push(member);
    }

    // about delete from arr https://medium.com/javascript-in-plain-english/how-to-remove-a-specific-item-from-an-array-in-javascript-a49b108404c
    delete(member) {
        //delete first occurance of element with indexOf and splice 
        //const index = this.data.indexOf(member)
        //if (index > -1) { this.data.splice(index, 1) };

        //delete all occurances with indexOf and splice 
        //let index;
        //while ((index = data.indexOf(member)) > -1) {
        //    this.data.splice(index, 1);
        //}

        //delete all occurances with for loop
        const myOutputArray = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== member) {
                myOutputArray.push(this.data[i])
            }
        }
        this.data = myOutputArray;
        console.log(this.data === myOutputArray);
        console.log(this.data == myOutputArray);
    }

    has(member) {
        return this.data.includes(member);
    }

    from(iterable) {
        if (isIterable(iterable)) {
            for (let i = 0; i < iterable.length; i++) {
                this.data.push(iterable[i]);
            }
        }     
    }

    static from2(a) {
        if (isIterable(a)) {
            let g = new Group();
            for (let item of a) {
                g.add(item);
            }
            return g;
        }
        return false;
    }
}

function isIterable(value) {
    return Symbol.iterator in Object(value);
}

function isIterable2(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

let g1 = new Group();

g1.add(1);
g1.add(2);
g1.add(1);
g1.add(2);
g1.add({ x: 1 })
g1.from([9, 10, 11]);
console.log(g1);


//Iterable groups

//class Group {
//    constructor() {
//        this.group = [];
//    }
//    add(item) {
//        if (!this.group.includes(item)) {
//            this.group.push(item);
//        }
//    }
//    delete(item) {
//        let index = this.group.indexOf(item);
//        if (index !== -1) {
//            this.group.splice(index, 1);
//        }
//    }
//    has(item) {
//        return this.group.includes(item);
//    }
//    static from(a) {
//        let g = new Group();
//        for (let item of a) {
//            g.add(item);
//        }
//        return g;
//    }
//    [Symbol.iterator]() {
//        return new GroupIterator(this);
//    };
//}

//class GroupIterator {
//    constructor(o) {
//        this.i = 0;
//        this.group = o.group;
//    }

//    next() {
//        if (this.i == this.group.length || this.i > 10) return { done: true };

//        let value = this.group[this.i];
//        this.i++;
//        return { value, done: false };
//    }
//}

//for (let value of Group.from(["a", "b", "c"])) {
//    console.log(value);
//}




//Borrowing a method

//Remember that methods that exist on plain objects come from Object.prototype.
//And that you can call a function with a specific this binding by using its call method.
let map = { one: true, two: true, hasOwnProperty: true };
// Fix this call
//console.log(map.hasOwnProperty("one"));
console.log(hasOwnProperty.call(map, 'one'));
// → true


//"❤️"