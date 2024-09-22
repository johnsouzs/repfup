let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade: number = +input();
let passageiros: number = 0; 

while (true) { 
    let movimentacao: number = +input(); 

    passageiros += movimentacao; 

    if (passageiros < 0) {
        passageiros = 0; 
    }

    if (passageiros === 0) {
        console.log("vazio"); 
    } else if (passageiros < capacidade) {
        console.log("ainda cabe"); 
    } else if (passageiros === capacidade) {
        console.log("lotado"); 
    } else if (passageiros >= 2 * capacidade) {
        console.log("hora de partir"); 
        break; 
    }
}

