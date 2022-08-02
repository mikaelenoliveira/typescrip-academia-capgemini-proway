"use strict";
class Animal {
    constructor(habitat, especie, raca, cor) {
        this.habitat = habitat;
        this.especie = especie;
        this.raca = raca;
        this.cor = cor;
    }
    barulho(som) {
        console.log(`O habitat é ${this.habitat}\n`);
        console.log(`A especie é ${this.especie} \n`);
        console.log(`A raça é ${this.raca} \n`);
        console.log(`A cor é ${this.cor} \n`);
        console.log(`O barulho é do ${this.especie} é ${som}\n`);
    }
}
let objanimal1;
objanimal1 = new Animal("domestico", "cão", "pitbull", "marrom");
objanimal1.barulho("AU AU AU");
let objanimal2;
objanimal2 = new Animal("domestico", "Gato", "srd", "preta");
objanimal2.barulho("MIAU MIAU");
/*let objanimal1: Animal
objanimal1 = new Animal()
objanimal1.habitat = "doméstico"
objanimal1.especie = "Cão"
objanimal1.raca = "pitbull"
objanimal1.cor = "marrom"
objanimal1.barulho("AU AU AU")

let objanimal2
objanimal1 = new Animal()
objanimal1.habitat = "doméstico"
objanimal1.especie = "Gato"
objanimal1.raca = "SRD"
objanimal1.cor = "Preto"
objanimal1.barulho("MIAU MIAU")*/ 
//# sourceMappingURL=exercicioClasses.js.map