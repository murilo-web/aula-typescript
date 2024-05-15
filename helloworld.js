var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.printNome = function () {
        return this.nome;
    };
    return Pessoa;
}());
var Pessoa = new Pessoa('felipe');
console.log(Pessoa.printNome());
