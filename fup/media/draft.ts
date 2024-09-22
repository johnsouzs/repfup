let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcMedia(a: number, b:number){
  let media = (a + b) / 2;
  return media;
}

let a: number = +input();
let b: number = +input();



write(calcMedia(a, b).toFixed(1));