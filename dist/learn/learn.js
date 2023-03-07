let firstCar = {
    type: "Suv",
    model: "RAV 4",
    year: 2018
};
let secondCar = {
    model: "A4",
    year: 2015
};
let Mercedes = 2023;
console.log(Mercedes);
console.log(firstCar);
// firstCar.abc = 1234 Typescript don't allow to add new property to firstCar, but JS allow
let numbers = [1, 3, 5, 7, 9, 11]; // array with unlimited index
let tuples = ["Oskar", 24, 1998]; // tuples array with three values, not expect more and must be in correct order
let union = ["Oskar", 24, "123"]; // Array with use union type to declare string or number properties
let first = {
    name: "Oskar",
    age: 24,
    height: 176
};
let second = {
    name: "Oskar",
    age: 24,
    height: 176,
    // telefon: "Xiaomi",
    smile: true
};
let key = 123;
key = "ABC"; // don't use any type beacuse TS don't block switch types when writing
let key1 = 123;
// key1 = "ABC"; Better option if don't know start value we can use Implicit typing
