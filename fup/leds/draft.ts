let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let casos: number = +input(); 


let ledsPorNumero: number[] = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

for (let i = 0; i < casos; i++) {
    let numero: string = input(); 
    let totalLeds: number = 0; 

    for (let char of numero) {
        totalLeds += ledsPorNumero[+char];
    }

    console.log(totalLeds + " leds");
}
