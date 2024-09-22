let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();

let som = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let r = a % b;

console.log(som + "\n" + sub + "\n" + mul + "\n" + div.toFixed(2) + "\n"+ r);
