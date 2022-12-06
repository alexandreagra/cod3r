function soma() {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma('z', 'a', 'b')) // O ZERO VEM PRIMEIRO POR CONTA DA DECLARAÇÃO DA VARIÁVEL
console.log(soma('1.1', '2.2', '3.3'))