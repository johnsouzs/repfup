let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let caract: string = input(); 
let letraTransformada: string;

if(caract.match(/^[a-zA-Z]$/)){
   if (caract === caract.toLowerCase()) {
    letraTransformada = caract.toUpperCase(); 
} else {
    letraTransformada = caract.toLowerCase(); 
}
} else{
console.log(caract)
process.exit();
}

console.log(letraTransformada);
