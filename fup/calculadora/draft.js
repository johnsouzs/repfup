let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();
let sim = input();

let som = Math.floor(n1 + n2)
let sub = Math.floor(n1 - n2)
let mul = Math.floor(n1 * n2)
let div = Math.floor(n1/n2)

if (sim === "+"){
  console.log(som)
}
if (sim === "-"){
  console.log(sub)
}
if( sim === "*"){
  console.log(mul)
}
if (sim === "/"){
  console.log(div)
}

