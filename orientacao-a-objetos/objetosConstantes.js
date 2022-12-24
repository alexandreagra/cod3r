// pessoa -> 123 -> {...}

const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 ->{...} 
// pessoa = { nome: 'Ana'} //Erro por causa da constante. Você pode alterar dados do objeto mas nunca o objeto em si, numa constante.

Object.freeze(pessoa) //o FREEZE previne que dados do objeto sejam alterados.

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' //NÃO VAI FUNCIONAR POR CAUSA DO FREEZE
// delete pessoa.nome // NÃO VAI FUNCIONAR POR CAUSA DO FREEZE
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
