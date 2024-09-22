let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let a = +input();
let b = +input();
if(a < b){
  write("invalido")
}

while(b > a){
  if(a % 2 === 0 && a % 3 === 0){
    let soma = 0;
     soma =+ a;
    console.log(soma)
  }
}