let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = +input(); 
let b: number = +input(); 

for (let i = a; i <= b; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("zigzag"); 
    } else if (i % 3 === 0) {
        console.log("zig"); 
    } else if (i % 5 === 0) {
        console.log("zag"); 
    } else {
        console.log(i); 
    }
}

