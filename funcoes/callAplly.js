function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = { 
    nome: 'Notebook',
    preco: 4589,
    dec: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//A DIFERENÇA ENTRE CALL E APPLY É A PASSAGEM DE PARÂMETROS. NO CALL, VOCÊ PASSA DIRETAMENTE NA CHAMADA.  NO APPLY, VOCÊ PASSA OS PARÂMETROS POR MEIO DE ARRAYS.

console.log(getPreco.call(carro, 0.17, '$'))

console.log(getPreco.apply(carro, [0.17, '$']))