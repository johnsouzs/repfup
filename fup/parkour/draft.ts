let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n: number = +input(); 
let alturas: number[] = input().split(" ").map(Number); 

let movimentosParkour: number = 0;

for (let i = 0; i < n - 1; i++) {
    if (Math.abs(alturas[i] - alturas[i + 1]) > 1) {
        movimentosParkour++; 
    }
}

console.log(movimentosParkour);
