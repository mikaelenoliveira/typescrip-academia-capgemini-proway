"use strict";
class CalculadoraAbstrata {
    somar(n1, n2) {
        return n1 + n2;
    }
}
class CalculadoraAbstrata2 extends CalculadoraAbstrata {
    subtrair(n1, n2) {
        return n1 - n2;
    }
}
let ca1 = new CalculadoraAbstrata2();
console.log(ca1.somar(10, 20));
console.log(ca1.subtrair(10, 20));
//# sourceMappingURL=novoExemploClasseAbstrata.js.map