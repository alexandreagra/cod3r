//FUNCTION FACTORY É UMA FUNÇÃO QUE RETORNA UM OBJETO


//ESSA É UMA FORMA COMUM DE GERAR DADOS COM VARIAVEIS
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '..',
    preco: 30
}

//Factory simples
function criarPessoa() {
    return { //ELA CRIA UM OBJETO A PARTIR DA CHAMADA DA FUNÇÃO
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())