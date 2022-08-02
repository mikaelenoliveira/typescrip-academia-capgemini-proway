"use strict";
class Veiculo {
    constructor(placa, modelo, marca) {
        this.placa = placa;
        this.modelo = modelo;
        this.marca = marca;
    }
    show() {
        console.log(`Placa: ${this.placa}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Marca: ${this.marca}`);
    }
}
let v1;
v1 = new Veiculo("abc-1234", "corsa", "Chevrolet");
v1.show();
class Moto extends Veiculo {
    constructor(placa, modelo, marca, cilindradas) {
        super(placa, modelo, marca);
        this.cilindradas = cilindradas;
    }
    show() {
        super.show();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}
let moto1;
moto1 = new Moto("def-3456", "broz", "honda", 190);
moto1.show();
class Carro extends Veiculo {
    constructor(placa, modelo, marca, quantPortas) {
        super(placa, modelo, marca);
        this.quantPortas = quantPortas;
    }
    show() {
        super.show();
        console.log(`O carro tem ${this.quantPortas} portas`);
    }
}
let carro1;
carro1 = new Carro("hij-6578", "Gol", "Wolks", 4);
carro1.show();
class Passeio extends Carro {
    constructor(placa, modelo, marca, quantPortas, tipo) {
        super(placa, modelo, marca, quantPortas);
        this.tipo = tipo;
    }
    show() {
        super.show();
        console.log(`Tipo: ${this.tipo}`);
    }
}
let pa1 = new Passeio("FGH-4567", "KA", "ford", 4, "sedan");
pa1.show();
//# sourceMappingURL=pai%20copy.js.map