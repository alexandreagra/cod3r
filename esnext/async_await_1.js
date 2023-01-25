function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

    async function executar() {
        let valor = await retornarValor()
         await esperarPor(1500)
         console.log(`Async/Await ${valor}...`)
         await esperarPor(1500)
         console.log(`Async/Await ${valor +1}...`)
         await esperarPor(1500)
         console.log(`Async/Await ${valor +2 }...`)

         return valor +3 
    }

    async function executarDeVerdade() {
        const valor = await executar()
        console.log(valor)
    }

    executarDeVerdade()

    //executar().then(console.log) Executando de forma assíncrona, as funções encapsuladas com promisse retornam o resultado esperado a partir do .then


    //TAMBÉM É possível criar uma função async e retornar um valor, sem o await e o consequente await ser chamado dentro de outra função assync, ex:


    // async function retornarValorRapido() {
    //     return 20
    // }

    // ...____....

    //async function executar {
    //     let valor = await retornarValorRapido()
    // }