
// MODIFICADOR PUBLICO
class Empregado{
    matricula: number 
    nome: string

    constructor(matricula:number, nome:string){
        this.matricula = matricula
        this.nome = nome
    }

    display():void{
        console.log(`A matricula ${this.matricula}`)
        console.log(`O Nome d ${this.nome}`)
    }
  }

  let empregado1: Empregado = new Empregado(123, "Antonio")
  console.log(empregado1.nome)


