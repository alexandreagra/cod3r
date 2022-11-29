let valor //não inicializada
console.log(valor)
valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) ERRO!
const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // EVITAR ATRIBUIR UNDEFINED
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //SEM PREÇO
console.log(!!produto.preco)
console.log(produto)