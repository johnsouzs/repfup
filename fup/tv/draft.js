let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

// let vTV = +input();
// let qP = +input();

// const juros = {
//   1 : 0,
//   2 : 0.5,
//   3 : 0.10,
//   4 : 0.15,
//   5 : 0.20,
//   6 : 0.25,
//   7 : 0.30,
//   8 : 0.35,
//   9 : 0.40,
//   10 : 0.45
// }

// let perc = juros[qP]

// let Vparc = vTV / qP;
// let Vtotal = vTV * perc

// console.log(Vparc.toFixed(2) + "\n" + Vtotal.toFixed(2))

let vlr = parseInt(input()), qtd_parc = parseInt(input());

let taxa = qtd_parc * 5 - 5

if (qtd_parc == 1) {
  write((vlr).toFixed(2) + '\n' + (vlr).toFixed(2));
} else {
  let vlr_taxa = (vlr * taxa) / 100
  let total = vlr + vlr_taxa
  write((total / qtd_parc).toFixed(2) + '\n' + (total).toFixed(2))
}
