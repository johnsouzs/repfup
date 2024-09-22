let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let vKH = +input();
let Tm = +input();
let cL = +input();

let Th = Tm/60
let dis = (vKH * Th);
let des = (dis/cL);

console.log(des.toFixed(2))