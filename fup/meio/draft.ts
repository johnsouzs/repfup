let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// write("qxcode");
let a: number = +input();
let b: number = +input();
let c: number = +input();

if(a > b && c < b || a < b && c > b){
  write(b)
}else if(b > a && c < a || c > a && b < a){
  write(a)
}else{
  write(c)
}