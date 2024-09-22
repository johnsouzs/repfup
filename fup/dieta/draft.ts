let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// write("qxcode");
let dias: number = +input();
let somKcal: number = 0;

for(let i = 0; i < dias; i++){
  let consumo: number = +input();
  somKcal += consumo
}
let media = somKcal / dias;
write(media.toFixed(1));