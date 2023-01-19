for (let letra of "Cod3r") {
    console.log(letra)
} // o 'of' percorreu cada letra da string "Cod3r"

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
} //o 'in' percorreu os valores do array a partir de indices

for (let assunto of assuntosEcma) {
    console.log(assunto)
} // percorreu o array listando os conteúdos sem os índices

const assuntosMap = new Map([
    ['Map', { abordado: true}],
    ['Set', { abordado: true}],
    ['Promise', { abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}