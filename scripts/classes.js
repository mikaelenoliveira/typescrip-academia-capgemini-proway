"use strict";
class Pessoa {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    ola() {
        console.log(`Ola ${this.nome}`);
    }
    display() {
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}\n`);
    }
}
class PessoaFisica extends Pessoa {
    constructor(id, nome, cpf) {
        super(id, nome);
        this.cpf = "";
        this.cpf = cpf;
    }
}
let pf = new PessoaFisica(1, "Mikaelen", "05121164157");
// pf.display()
console.log(pf.id);
console.log(pf.getNome());
console.log(pf.cpf);
class PessoJuridica extends Pessoa {
    constructor(id, nome, cnpj) {
        super(id, nome);
        this.cnpj = "";
        this.cnpj = cnpj;
    }
}
let pj = new PessoJuridica(1, "Mikaelen", "15371991000164");
// pf.display()
console.log(pj.id);
console.log(pj.getNome());
console.log(pj.cnpj);
//# sourceMappingURL=classes.js.map