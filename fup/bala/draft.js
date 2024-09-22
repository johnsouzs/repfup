let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let cX1 = +input();
let cY1 = +input();
let cX2 = +input();
let cY2 = +input();

let X = Math.pow((cX2-cX1), 2);
let Y = Math.pow((cY2-cY1), 2);
let dis = Math.sqrt(X + Y);

console.log(dis.toFixed(2));