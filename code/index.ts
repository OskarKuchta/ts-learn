import * as moment from 'moment';
import 'moment/locale/pt-br';
import * as randomExt from "random-ext";

let firstTs = moment("02-26-2023 19:43").format();
console.log(firstTs);
let randomize = randomExt.integer(15, 10);
console.log(randomize);
let secondRandomize = randomExt.float(10.53, 2.85).toFixed(2);
console.log(secondRandomize);