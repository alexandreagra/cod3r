function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 //-1 (colocando menos um, a estrutura começa como true e não precisa rodar.)

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')

//A estrutura while se baseia em "verdadeiro ou falso", no sentido de que a estrutura de repetição, enquanto o resultado for "falso", vai ficar se repetindo infinitamente.