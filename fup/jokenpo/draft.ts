let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function jogo(j1: string, j2: string) : string{
  if(j1 === j2){
    return ('empate');
  }
  if(j1 === "R" && j2 === "P" || j1 === "P" && j2 === "S" || j1 === "S" && j2 === "R"){
    return ('jog2')
  }
  return ('jog1')
}

let jog1 = input();
let jog2 = input();

console.log(jogo(jog1 ,jog2));