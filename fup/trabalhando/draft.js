let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let dia = +input();
let hora = +input();

let diaLet = dia > 1 && dia < 7;
let horaSem = hora >= 8 && hora <= 11 || hora >= 14 && hora <= 17;
let horaSab = hora >= 8 && hora <= 11;

if (diaLet && horaSem){
  write('SIM');
}
if (dia === 7 && horaSab){
  write('SIM');
}
if (diaLet && !horaSem){
  write("NAO");
}
if (dia === 7 && !horaSab){
  write("NAO");
}
if (dia === 1){
  write('NAO')
}
