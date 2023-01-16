console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) //Não aponta para exports dentro de uma função
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' // nesse cenário, dentro de uma função, o this aponta para global. Fora de uma função, aponta para algo publico, algo que será visto ou poderá ser utilizado fora do módulo.
}

logThis()

//É importante destacar que o this, dentro de uma arrow function, apontará para o module exports.