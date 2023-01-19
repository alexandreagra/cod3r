function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase) //reject trata o caso de erro da promise
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //No caso do chamamento do reject, a resposta - sobretudo ao erro - é através do catch. É o jeito de tratar um erro a partir desse método. 