//No setTimeout, você passa uma função como parâmetro e logo após o fechamento dessa função, o tempo em milisegundos que essa função irá ser executada.

// setTimeout(function() {
//     console.log('Executando callback...')

//     setTimeout(function() {
//         console.log('Executando callback')

//         setTimeout(function(){
//             console.log('Executando callback')
//         }, 2000)
//     }, 2000)
// }, 2000) //Formato de callback HELL, aninhadas e completamente fora dos padrões atuais extendendo o código de forma ineficiente. 

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor(7000)
.then(() => esperarPor())
.then(esperarPor) //Formato correta, utilizando promise. Percebe-se que foi utilizada a função, definindo parâmetro, logo após um then e depois, outro, no caso resolvendo 3 solicitações aninhadas e cadenciadas. mesmo definido o "7000" na primeira chamada da função, os próximos "thens" utilizarão o padrão definido na própria estrutura da Promise, que é 2000 (tempo = 2000). 