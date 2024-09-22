let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// write("qxcode");
let pedra = +input();
let pe = input();

write("[", " ")
for (let i = 0; i <= 10; i++){
  if(i == 10){
    if(pedra == 10){
      break;
    }else{
    write('ceu', " ")
      break;
  } 
  }
  if(i == pedra){
    continue;
  }else{
    write(i + pe, " ");
    pe = pe == "d" ? "e" : "d";
  }
}
write("]")

