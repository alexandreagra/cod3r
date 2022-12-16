const motos = ["CG125", "TRAIL", "HAYABUSA", "NINJA"]

function mostrar(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

motos.forEach(mostrar)
