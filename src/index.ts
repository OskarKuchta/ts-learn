export enum Sides {
    Left = 1,
    Right,
    Up = 10,
    Down
}
interface Person {
    name: string,
    surrname?: string,
    age: number
} // only use to objects
interface Active extends Person {
    isActive: boolean
} 
type CarYear = number; // one line type defined
type Car = {
    model: string,
    year: number
}


let first: Person = {
    name: "Oskar",
    age: 24
}
let second: [string, number] = ["21", 21];
let third: number[] = [18,20,50,1239];
let fifth: Car = {
    model: "Mercedes",
    year: 2020
}
second.push("abc"); // bad reason for tuples, it can only contain two items
third.push(34325);
console.log(Sides.Up + Sides.Right); //Reuse enum values
let Mercedes: CarYear = 2020; // only can contain number because type CarYear have number 

let error: number | string = 404; // it's can contain number or string, nothing more
let secondPerson: Active = {
    name: "Oskar",
    age: 24,
    isActive: true
} // Person interface with additional criterion isActive
const addNumbers = (a: number, b: number = 10) => {
    return a + b; // Only can use number functionalities
}