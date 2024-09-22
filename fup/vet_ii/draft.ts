let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qnt: number = +input(); 
let numeros: number[] = []; 

if (qnt > 0) {
    let line: string = input(); 
    numeros = line.split(" ").map(Number); 
}

if (numeros.length === 0) {
    console.log("[ ]");
} else {
    console.log("[ " + numeros.join(" ") + " ]");
}

// let qnt:number = +input();
// let numeros: number[] = [];

// for(let i = 0; i < qnt; i++){
//     let [n] = input().split(" ").map(num => +num);
//     numeros.push(n);
// }
// console.log(numeros);