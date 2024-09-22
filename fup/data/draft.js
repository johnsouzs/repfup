let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let h = +input();
let mi = +input();
let d = +input();
let me = +input();
let a = +input();
a = a % 100;

h = String(h).padStart(2, '0');
mi = String(mi).padStart(2, '0');
d = String(d).padStart(2, '0');
me = String(me).padStart(2, '0');
a = String(a).padStart(2, '0');

console.log(h + ":" + mi + " " + d + "/" + me + "/" + a);

