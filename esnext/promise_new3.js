function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => { //Uma Promise pode ser retornada a partir de uma função. 
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min //Math random tem valor de função, devendo ser chamada com "()"
        resolve(aleatorio)
    }) 
       
}

gerarNumerosEntre(1, 60)
.then(num => num * 10) // Esse "num" é apenas a modificação da variável, transformando-a com incrementos ou ao gosto do desenvolvedor, como por exemplo: "Eu quero o resultado, mas agora eu quero ele *10", como no exemplo.
.then(numX10 => `O número gerado foi ${numX10}`) //Da mesma forma nesse exemplo, sendo que ao invés de alterar um resultado, foi realizada apenas uma modificação de Template String. 
.then(console.log)