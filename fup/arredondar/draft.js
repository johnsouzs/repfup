let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let fun = input();
let n = +input();

if (fun === "c"){
  console.log(Math.ceil(n));
}
if (fun === "f"){
  console.log(Math.floor(n));
}
if (fun === "r"){
  console.log(Math.round(n));
}
