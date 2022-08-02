interface Icontato {
    id: number
    nome: string
    fone: string
    email: string
}

var ct1: Icontato
ct1 = {id:1, nome: "Mikaelen", fone: "123", email:"mika@gmail.com"}

console.log(ct1)
console.log(ct1.nome)
console.log(ct1.email)


interface Ipessoa{
    id: number
    nome: string
}

interface IpessoaFisica{
    cpf: string
}

interface IpessoaJuridica{
    cnpj: string
}