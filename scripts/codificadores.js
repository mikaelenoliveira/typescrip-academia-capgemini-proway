"use strict";
// MODIFICADOR PUBLICO
class Empregado {
    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
    display() {
        console.log(`A matricula ${this.matricula}`);
        console.log(`O Nome d ${this.nome}`);
    }
}
let empregado1 = new Empregado(123, "Antonio");
console.log(empregado1.nome);
//# sourceMappingURL=codificadores.js.map