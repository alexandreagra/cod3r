// par nome/valor

const saudacao = 'Opa' //contexto léxico!

function exec() {
    const saudacao = 'Faaaala'
    return saudacao
}

//Objetos são gropos aninhados de pares nome/valor

const cliente = { 
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec)
console.log(cliente)