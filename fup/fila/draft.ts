let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n: number = +input();
let pessoas: number[] = input().split(" ").map(Number);
let alunos: number [] = [];
let professores: number[] = [];

if (n === 0) {
    console.log("[ ]");
    console.log("[ ]");
    process.exit();  
}


for(let i = 0; i < pessoas.length; i++){
    let valor = pessoas[i];
    if(valor % 2 == 0){
        alunos.push(valor)
    }else{
        professores.push(valor)
    }
}

if (professores.length === 0) {
    console.log("[ ]");
} else {
    console.log("[ " + professores.join(" ") + " ]");
}

if (alunos.length === 0) {
    console.log("[ ]");
} else {
    console.log("[ " + alunos.join(" ") + " ]");
}