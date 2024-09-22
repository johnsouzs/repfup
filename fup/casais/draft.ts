let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qnt: number = +input();
let animais: number[] = input().split(" ").map(Number);
let numSet: Set<number> = new Set(animais);
let pares = 0;

for(let num of animais){
    if(num < 0 && numSet.has(-num)){
        pares++;
    }
}

console.log(pares);
