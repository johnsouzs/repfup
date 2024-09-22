let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let t = +input();

let h = Math.floor(t/3600);
let m_0 = Math.floor(t/60);
let s = Math.floor(t%60);

let m = Math.floor(m_0%60);

let res = h + ":" + m + ":" + s;

console.log(res);

