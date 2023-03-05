var Sides;
(function (Sides) {
    Sides[Sides["Left"] = 1] = "Left";
    Sides[Sides["Right"] = 2] = "Right";
    Sides[Sides["Up"] = 10] = "Up";
    Sides[Sides["Down"] = 11] = "Down";
})(Sides || (Sides = {}));
let first = {
    name: "Oskar",
    age: 24
};
let second = ["21", 21];
let third = [18, 20, 50, 1239];
let fifth = {
    model: "Mercedes",
    year: 2020
};
second.push("abc");
third.push(34325);
console.log(Sides.Up + Sides.Right);
let Mercedes = 2020;
let error = 404;
let secondPerson = {
    name: "Oskar",
    age: 24,
    isActive: true
};
const addNumbers = (a, b = 10) => {
    return a + b;
};
//# sourceMappingURL=index.js.map