let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let wifi = +input();
let login = +input();
let admin = +input();

let W = wifi === 1
let L = login === 1
let A = admin === 1

if(!W){
  write('you must connect to wifi')
} else if(!L){
  write('you need to login first')
} else if(!A){
  write('you must to login as admin')

}else{
  write('done')
}