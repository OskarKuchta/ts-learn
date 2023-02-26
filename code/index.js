import _ from "lodash";
import moment from "moment";
const numbers = [1,4,43,21,74,32,15];

_.each(numbers, (numbers) => {
    console.log(numbers * 2)
});

let firstData = new Date();
console.log(firstData);
let newData = moment("02-26-2023 19:43").format();
console.log(newData);
