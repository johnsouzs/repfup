const { inflate } = require("zlib");

let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let A = +input();
let G = +input();
let Ra = +input();
let Rg = +input();

let Ea = A * Ra;
let Eg = G * Rg;

if(Ea === Eg || Ea > Eg){
  write('G')
}else{
  write('A')
}
// let A = +input();
// let G = +input();
// let Ra = +input();
// let Rg = +input();

// let Ea = A * Ra;
// let Eg = G * Rg;

// if (Ea === Eg) {
//   write('G');
// } else if (Ea > Eg) {
//   write('G');
// } else {
//   write('A');
// }
