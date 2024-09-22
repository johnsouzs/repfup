let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qnt: number = +input();

class Ficha{
    nome: string = "";
    idade: number = 0;
    sexo: string = "";
    constructor(nome: string, idade:number, sexo :string){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
}

let pessoas: Ficha[] = [];
for(let i = 0; i < qnt; i++){
    let [nome, idade, sexo] = input().split(" ")
    pessoas.push(new Ficha(nome, +idade, sexo))

}

let ref= 0;
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].sexo == "f" && pessoas[i].idade > ref){
        ref = pessoas[i].idade;
        continue;
    }
}

if(ref > 0){
    for(let i = 0; i < pessoas.length; i++){
        if(pessoas[i].idade == ref){
            console.log(pessoas[i].nome)
        }
    }
}else{
    write("nao tem mulher")
}