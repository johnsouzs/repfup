+let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let pi = +input();
let n1 = +input();
let n2 = +input();

if (pi === 0 && (n1+n2) % 2 ===0 || pi === 1 && (n1+n2) % 2 !==0){
  write('0')
}else{
  write('1')
}