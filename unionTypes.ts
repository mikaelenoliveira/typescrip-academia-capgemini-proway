
// UNION TYPE --->> DESSA FORMA DA PRA ATRIBUIR VARIOS TIPOS DE DADOS NA VARIAVEL

var codigo:(string|number)
codigo = 123
codigo = "abc"

console.log(codigo)

var nomes: string[] = []
nomes.push("Mikaelen")
nomes.push("Carlos")
nomes.push("Andre")
nomes.push("Maria")
nomes.push("Antonio")

console.log(nomes)

var medias: (string|number) [] = []
medias.push("Mikaelen")
medias.push(10)
medias.push(6)
medias.push("Carlos")
medias.push(10)
medias.push(6)
medias.push("Andre")
medias.push(10)
medias.push(6)
medias.push("Maria")
medias.push(6)
medias.push("Antonio")
medias.push(10)
medias.push(6)

console.table(medias)