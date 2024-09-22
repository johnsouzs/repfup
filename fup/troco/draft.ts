let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let troco: number = +input(); 

let cedulas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05]; 

let resultado: string[] = [];
troco = Math.round(troco * 100) / 100; 

for (let valor of cedulas) {
    let qtd = Math.floor(troco / valor); 
    troco = Math.round((troco - qtd * valor) * 100) / 100;
    qtd > 0 && resultado.push(qtd + " de " + valor.toFixed(2)); 
}

troco = Math.round(troco * 100) / 100; 
troco > 0 && resultado.push("Falta " + troco.toFixed(2)); 

for (let i = 0; i < resultado.length; i++) {
    console.log(resultado[i]); 
}

