interface Iproduto{
    id: number
    descricao: string
    preco: number
    show():void
}

interface Icalculos{
    calcularDesconto(taxa: number):number
    calcularAcrescimo(taxa: number):number
}

class Produto implements Iproduto, Icalculos{
    id: number
    descricao: string
    preco: number
    constructor(id:number, descricao: string, preco:number){
        this.id = id
        this.descricao = descricao
        this.preco = preco

    }
    show():void {
        console.log(`ID: ${this.id}`)
        console.log(`Descrição: ${this.descricao}`)
        console.log(`Preço: ${this.preco}`)
    }

    calcularAcrescimo(taxa: number): number {
        return this.preco * (taxa/100)
    }

    calcularDesconto(taxa: number): number {
        return this.preco * (taxa/100)
    }

    preCocomdeconto(taxa:number){
        console.log(`Preço com desconto: ${(produto1.preco - produto1.calcularDesconto(taxa)).toFixed(2)}`)
    }

}

let produto1: Produto = new Produto(1, "feijão", 7.89)
produto1.show()

console.log(produto1.calcularDesconto(10))
produto1.preCocomdeconto(20)