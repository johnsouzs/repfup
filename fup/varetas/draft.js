let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let A = +input();
let B = +input();
let C = +input();

if (A + B > C && A + C > B && B + C > A){
  write ('True')
}else{
  write('False')
}
