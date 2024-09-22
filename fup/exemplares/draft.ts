let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qnt: number = +input();
let animais: number[] = input().split(" ").map(Number);

let novaLista: number[] = [];

for (let i = 0; i < animais.length; i++) {
    let numeroAtual = animais[i];
    let encontrado = false;

    for (let j = 0; j < novaLista.length; j++) {
        if (novaLista[j] === numeroAtual) {
            encontrado = true;
            break; 
        }
    }

    if (!encontrado) {
        novaLista.push(numeroAtual);
    }
}

for (let i = 0; i < novaLista.length - 1; i++) {
    for (let j = 0; j < novaLista.length - 1 - i; j++) {
        if (novaLista[j] > novaLista[j + 1]) { 
            let temp: number = novaLista[j];
            novaLista[j] = novaLista[j + 1];
            novaLista[j + 1] = temp;
        }
    }
}

console.log(novaLista.join(" "));
