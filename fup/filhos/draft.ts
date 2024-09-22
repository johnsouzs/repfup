let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// write("qxcode");
let i1: number = +input();
let qf: number = +input();

for (let i = 0; i < qf; i++){
  let idades = i1 + (i * 2);
  write(idades)
}