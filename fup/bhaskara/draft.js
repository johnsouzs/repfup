let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();
let c = +input();

let delta = b * b - 4 * a * c 
let X1 = (- b + Math.sqrt(delta)) / (2 * a)
let X2 = (- b - Math.sqrt(delta)) / (2 * a)

if (delta > 0){
  console.log(X1.toFixed(2) + "\n" + X2.toFixed(2)) 
}
if (delta === 0){
  console.log(X1.toFixed(2))
}
if (delta < 0){
  write('nao ha raiz real')
}