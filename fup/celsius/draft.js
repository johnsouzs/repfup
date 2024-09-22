let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

// let Tc = +input();
// let Tf = (Tc * 9/5) + 32
// console.log(Tf.toFixed(6))


let Tc = +input();
let Tf = Tc * 1.8 + 32;
console.log(Tf.toFixed(6))
