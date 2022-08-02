"use strict";
class Produto {
    constructor(id, descricao, preco) {
        this.id = id;
        this.descricao = descricao;
        this.preco = preco;
    }
    show() {
        console.log(`ID: ${this.id}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Preço: ${this.preco}`);
    }
    calcularAcrescimo(taxa) {
        return this.preco * (taxa / 100);
    }
    calcularDesconto(taxa) {
        return this.preco * (taxa / 100);
    }
    preCocomdeconto(taxa) {
        console.log(`Preço com desconto: ${(produto1.preco - produto1.calcularDesconto(taxa)).toFixed(2)}`);
    }
}
let produto1 = new Produto(1, "feijão", 7.89);
produto1.show();
console.log(produto1.calcularDesconto(10));
produto1.preCocomdeconto(20);
//# sourceMappingURL=herancaComInterfaces.js.map