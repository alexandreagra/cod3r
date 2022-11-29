function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')

// DO WHILE é a única expressão que vem DEPOIS do bloco. 

//Via de regra, os programadores não utilizam o do while. Porém, o DO WHILE garante que a expressão será lida.

//No DO WHILE não é necessário declarar valor na variável que será utilizada na estrutura. 