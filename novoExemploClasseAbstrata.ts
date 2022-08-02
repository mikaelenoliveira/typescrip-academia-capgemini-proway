abstract class CalculadoraAbstrata{
    somar(n1:number, n2: number): number{
        return n1+n2

    }

    abstract subtrair(n1:number, n2: number): number
}

class CalculadoraAbstrata2 extends CalculadoraAbstrata{
    subtrair(n1: number, n2: number): number {
        return n1-n2
    }


}

let ca1: CalculadoraAbstrata2 = new CalculadoraAbstrata2()
console.log(ca1.somar(10,20))
console.log(ca1.subtrair(10,20))