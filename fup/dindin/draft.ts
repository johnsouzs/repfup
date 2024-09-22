let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// write("qxcode");

// let quantD: number = +input();

// for(let i = 0; i < quantD; i++){
//   let lista = input().split(" ");
//   let sabor: string = lista[0];
//   let turno: string = lista[1];
//   // let saborC = sabor === "c";
//   // let saborL = sabor === "l";
//   // let turnoM = turno === "m";
//   // let turnoT = turno === "t";
//   // if(saborC === saborL){
//   //   write('empate')
//   // }else if(saborC > saborL){
//   //   write('c')
//   // }else if(saborC < saborL){
//   //   write('l')
//   // }
  let quantD: number = +input();
  let contC = 0, contL = 0; 
  let contM = 0, contT = 0; 

  for (let i = 0; i < quantD; i++) {
      let lista = input().split(" ");
      let sabor: string = lista[0];
      let turno: string = lista[1];

      
      if (sabor === "c") contC++;
      if (sabor === "l") contL++;

      
      if (turno === "m") contM++;
      if (turno === "t") contT++;
  }

  
  if (contC > contL) {
      write('c');
  } else if (contL > contC) {
      write('l');
  } else {
      write('empate');
  }

  
  if (contM < contT) {
      write('m');
  } else if (contT < contM) {
      write('t');
  } else {
      write('empate');
  }
// } 
