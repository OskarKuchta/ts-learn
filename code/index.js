const _ =  require("lodash");
const numbers = [1,4,43,21,74,32,15];

_.each(numbers, (numbers) => {
    console.log(numbers * 2)
});