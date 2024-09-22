let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

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