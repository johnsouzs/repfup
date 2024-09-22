let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c1: number = +input(); 
let c2: number = +input(); 
let qnt: number = +input(); 
let patas: number = 0; 

for (let i = 0; i < qnt; i++) {
    let animal: string = input(); 
    if (animal === 'v' || animal === 'c') {
        patas += 4; 
    } else if (animal === 'g') {
        patas += 2; 
    }
}

console.log(patas); 


let dif1 = Math.abs(c1 - patas);
let dif2 = Math.abs(c2 - patas);

if (dif1 < dif2) {
    console.log("Chico Bento"); 
} else if (dif2 < dif1) {
    console.log("Cebolinha"); 
} else {
    console.log("empate"); 
}
