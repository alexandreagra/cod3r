function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => { //Uma Promise pode ser retornada a partir de uma função. 
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min //Math random tem valor de função, devendo ser chamada com "()"
            resolve(aleatorio)

        }, tempo)
    }) 
       
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then( console.log) //Traz todos os resultados de uma vez quando todos eles forem processados
    .then(() => {
        console.timeEnd('promise')
    })
