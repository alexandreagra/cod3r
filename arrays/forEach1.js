const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    console.log(x) //Funcão callBack de forEach recebe apenas 3 parâmetros = nome(string), indice, array
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)