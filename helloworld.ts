class Pessoa{

    nome:string

    constructor(nome:string){
        this.nome = nome;

    }

    printNome(){
        return this.nome;
    }
}
var Pessoa = new Pessoa('felipe')

console.log(Pessoa.printNome());



