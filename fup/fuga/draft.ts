let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// write("qxcode");
// let lista = input().split(" ");
// let helic: number = +lista[0];
// let polic: number = +lista[1];
// let fugit: number = +lista[0];
// let direc: number = +lista[0];

// for (let i = 0; i < 10; i++) {
//   fugit += direc;
//  if (fugit === 18){
//    fugit = 0
//  }
//   if (fugit == -1){
//     fugit = 15
//   }
// } 
// write(fugit, " ");
let lista = input().split(" ");
let QuantD: number = +input();
let hora : number = +lista[0];
let turno : string = lista[1];

for(let i = 0; i)