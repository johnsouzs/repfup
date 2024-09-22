let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let chut1 = +input();
let esco2 = input();
let valor = +input();

// let Dchut1 = Math.abs(valor - chut1);

if ((valor >= chut1 && esco2 === "M") || (valor <= chut1 && esco2 === "m") ){
  write('segundo')
}else{
  write('primeiro')
}

// if (Dchut1 > valor && esco2 === "M" || Dchut1 < valor && esco2 === "m"){
//   write('segundo')
// }
// if (Dchut1 === valor){
//   write('primeiro')
// }
// if (Dchut1 < valor && esco2 === "M" || Dchut1 > valor && esco2 === "m"){
//   write('primeiro')
// }
// if (valor )
