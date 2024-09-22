let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let A = +input();
let B = +input();
let C = +input();
let H = +input();
let L = +input();

if((A <= H && B <= L) || (A <= L && B <= H) ||  
  (A <= H && C <= L) || (A <= L && C <= H) ||  
  (B <= H && C <= L) || (B <= L && C <= H)     
   ) {
  console.log('S'); 
} else {
  console.log('N'); 
}