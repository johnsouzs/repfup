let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qnt: number = +input();
let soldados: number[] = [];
let rebeldes:number[] = [];

for(let i= 0; i < qnt; i++){
    let pessoas = +input();
    if(pessoas % 2 == 0){
        rebeldes.push(pessoas)
    }else{
        soldados.push(pessoas)
    }
}
let somaSoldados = 0;
for(let valor of soldados){
    somaSoldados += valor
}
let somaRebeldes = 0;
for(let valor of rebeldes){
    somaRebeldes += valor
}

if(somaSoldados> somaRebeldes){
    write("soldados")
}else if(somaRebeldes > somaSoldados){
    write("rebeldes")
}else{
    write("empate")
}
