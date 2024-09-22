let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num1 = +input()
let num2 = +input()
let num3 = +input()

let resp = num1 + num2 + num3

console.log (resp)

