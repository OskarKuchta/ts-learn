type Car = {
    type?: string,
    model: string,
    year: number
}   // typical type with once optional 'type'
type Mercedes = number; // one line type without brackets
let firstCar: Car = {
    type: "Suv",
    model: "RAV 4",
    year: 2018
}
let secondCar: Car = {
    model: "A4",
    year: 2015
}
let Mercedes: Mercedes = 2023;
console.log(Mercedes);
console.log(firstCar);
// firstCar.abc = 1234 Typescript don't allow to add new property to firstCar, but JS allow
let numbers: number[] = [1,3,5,7,9,11]; // array with unlimited index
let tuples: [string, number, number] = ["Oskar", 24, 1998]; // tuples array with three values, not expect more and must be in correct order
let union: (string | number)[] = ["Oskar", 24, "123"]; // Array with use union type to declare string or number properties
interface Person {
    name: string,
    age: number,
    height: number
}
let first: Person = {
    name: "Oskar",
    age: 24,
    height: 176
}
interface FullPerson extends Person {
    telefon?: string,
    smile: boolean
} // Add more object keys to check with optional telefon
let second: FullPerson = {
    name: "Oskar",
    age: 24,
    height: 176,
    // telefon: "Xiaomi",
    smile: true
}
let key: any = 123;
key = "ABC" // don't use any type beacuse TS don't block switch types when writing
let key1 = 123;
// key1 = "ABC"; Better option if don't know start value we can use Implicit typing


