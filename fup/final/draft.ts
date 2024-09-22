let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function verificarAprov(n1 : number, n2: number, nF: number): string{
  let media = (n1 + n2) / 2
  if(media > 7){
    return ('aprovado')
  }
  if(media < 4){
    return ('reprovado')
  }
  let novaMedia = (media + nF) / 2;
  if(novaMedia >= 5){
    return ("aprovado na final")
  }
  return("reprovado na final")
}


let n1 = +input();
let n2 = +input();
let nF = +input();
console.log(verificarAprov(n1, n2, nF));