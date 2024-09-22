let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


// let com1 = +input();
// let alt1 = +input();
// let com2 = +input();
// let alt2 = +input();

// let area1 = com1 * alt1;
// let area2 = com2 * alt2;

// if(area1 > area2){
//   write(area1);
// }else{
//   write(area2);
// }
function areaMaior(c1: number, a1: number, c2: number, a2: number){
  let area1 = c1 * a1;
  let area2 = c2 * a2;

  if(area1 > area2){
    return (area1);
  }
  return (area2);

}

let com1 = +input();
let alt1 = +input();
let com2 = +input();
let alt2 = +input();

console.log(areaMaior(com1, alt1, com2, alt2))