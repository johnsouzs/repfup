let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let V = +input();
let c1 = +input();
let c2 = +input();

let Dc1 = Math.abs(V - c1);
let Dc2 = Math.abs(V - c2);

if (Dc1 < Dc2){
  write('primeiro')
}
if (Dc2 < Dc1){
  write('segundo')
}
if (Dc1 === Dc2){
  write('empate')
}
