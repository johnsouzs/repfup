let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let calcas: number[] = [];

for(let i = 0; i < 5; i++){
    let calca = +input();
    calcas.push(calca);
}

let ref = calcas[0];
for(let i = 0; i < calcas.length; i++){
    if(calcas[i] < ref){
        ref = calcas[i];
    }
}
console.log(ref);