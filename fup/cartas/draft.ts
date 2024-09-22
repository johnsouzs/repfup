let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qnt: number = +input();
let cartas: number[] = input().split(" ").map(Number);
let novasCartas: string[] = [];

for(let i = 0; i < cartas.length; i++){
    let valor = cartas[i];
    if(valor === 1){
        novasCartas.push("A");
    }else if(valor === 11){
        novasCartas.push("J")
    }else if(valor === 12){
        novasCartas.push("Q")
    }else if(valor === 13){
        novasCartas.push("K")
    }else{
        novasCartas.push(valor.toString())
    }
}
if(qnt === 0){
    write("[]")
}else{
console.log("[" + novasCartas.join(", ") + "]");
}