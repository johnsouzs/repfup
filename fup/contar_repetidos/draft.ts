let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let [x, n] = input().split(" ").map(Number);
let valores: number[] = [];

for(let i = 0; i < n; i++){
    let num = +input();
    valores.push(num)
}

let cont = 0;
for(let i = 0; i < valores.length; i++){
    if(x === valores[i]){
        cont++;
    }
}
console.log(cont);
