function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        
        } catch(e) {
            reject(e)
        }    
    })
}

funcionarOuNao('testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
       // err => console.log(`Erro Esp.: ${err}`) //Quando se trata um erro a partir de um .then, o catch não será lido. 
        )
    .then(() => console.log('Quase Fim!')) //Uma vez tratado o erro, os próximos métodos não teram uma resposta ou não serão lidos.
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))