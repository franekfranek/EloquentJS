//Shallow copy example
//let person = {
//    firstName: 'John',
//    lastName: 'Doe',
//    address: {
//        street: 'North 1st street',
//        city: 'San Jose',
//        state: 'CA',
//        country: 'USA'
//    }
//};


//let copiedPerson = Object.assign({}, person);

//copiedPerson.firstName = 'Jane'; // disconnected

//copiedPerson.address.street = 'Amphitheatre Parkway'; // connected
//copiedPerson.address.city = 'Mountain View'; // connected

//console.log(copiedPerson);




//Deep copy example
let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};


let copiedPerson1 = JSON.parse(JSON.stringify(person1));

copiedPerson1.firstName = 'Jane'; // disconnected

copiedPerson1.address.street = 'Amphitheatre Parkway';
copiedPerson1.address.city = 'Mountain View';

console.log(copiedPerson1);

var a = "10";
var b = 0.11;
console.log(a + b);

console.log(10 == "10");
