let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n = +input();

if (n > 0){
  write('positivo')
}
if (n < 0){
  write ('negativo')
}
if (n === 0){
  write('nulo')
}