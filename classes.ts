class Pessoa{
    id: number 
    private nome: string 

    constructor(id:number, nome:string){
        this.id = id
        this.nome = nome

    }

    getNome(): string{
        return this.nome
    }

    ola():void{
        console.log(`Ola ${this.nome}`)
    }

    display():void{
        console.log(`ID: ${this.id}`)
        console.log(`Nome: ${this.nome}\n`)

    }
}

class PessoaFisica extends Pessoa{
    cpf: string = ""

    constructor(id: number, nome:string, cpf: string){
        super(id, nome)
        this.cpf = cpf
    }
}

let pf = new PessoaFisica(1, "Mikaelen", "05121164157")
// pf.display()
console.log(pf.id)
console.log(pf.getNome())
console.log(pf.cpf)

class PessoJuridica extends Pessoa{
    cnpj: string= ""

    constructor(id: number, nome:string, cnpj: string){
        super(id, nome)
        this.cnpj = cnpj

}
  
}

let pj = new PessoJuridica(1, "Mikaelen", "15371991000164")
// pf.display()
console.log(pj.id)
console.log(pj.getNome())
console.log(pj.cnpj)
