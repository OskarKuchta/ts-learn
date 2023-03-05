"use strict";
var Sides;
(function (Sides) {
    Sides[Sides["Left"] = 1] = "Left";
    Sides[Sides["Right"] = 2] = "Right";
    Sides[Sides["Up"] = 10] = "Up";
    Sides[Sides["Down"] = 11] = "Down";
})(Sides || (Sides = {}));
var first = {
    name: "Oskar",
    age: 24
};
var second = ["21", 21];
var third = [18, 20, 50, 1239];
var fifth = {
    model: "Mercedes",
    year: 2020
};
second.push("abc"); // bad reason for tuples, it can only contain two items
third.push(34325);
console.log(Sides.Up + Sides.Right); //Reuse enum values
var Mercedes = 2020; // only can contain number because type CarYear have number 
var error = 404; // it's can contain number or string, nothing more
var secondPerson = {
    name: "Oskar",
    age: 24,
    isActive: true
}; // Person interface with additional criterion isActive
var addNumbers = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b; // Only can use number functionalities
};
