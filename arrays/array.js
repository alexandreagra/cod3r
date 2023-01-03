//EM JS, Array tem valor de objeto (sendo que especial, a partir de uma estrutura indexada). 

//O ARRAY É UMA ESTRUTURA HETEROGÊNEA, PELA FRACA TIPAGEM DO JS.

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') 
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana' ] //NOTAÇÃO LITERAL, USO RECOMENDADO.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // NÃO DECLARADO, PORTANTO, UNDEFINED.

aprovados[3] = 'Paulo' // ADICIONANDO ELEMENTOS AO ARRAY
aprovados.push('Abla') //COM O MÉTODO PUSH, VOCÊ ADICIONA UM ELEMENTO AO ARRAY DE OUTRA FORMA.
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
//QUANDO VOCÊ ADICIONA UM ELEMENTO COM ÍNDICE MUITO AVANÇADO, OS ARRAYS ANTERIORES QUE SÃO AUTOMATICAMENTE CRIADOS, FICAM COM UNDEFINED

console.log(aprovados)
aprovados.sort() //CAUSA ALTERAÇÃO DIRETAMENTE NO ARRAY, REORGANIZANDO-O.
console.log(aprovados)

delete aprovados[1] //EXCLUINDO ARRAY, NÃO REORDENANDO O ARRAY. O ELEMENTO EXCLUÍDO VOLTA UNDEFINED.
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //FUNÇÃO SPLICE ADICIONA ELEMENTOS A UM DETERMINADO ÍNDICE, ASSIM COMO REMOVER E ADICIONAR E REMOVER ITEMS. O PRIMEIRO NÚMERO TEMOS A ALTURA DO INDICE, NO SEGUNDO, O ELEMENTO DO ÍNDICE (QUE PODE TER MAIS DE UM ELEMENTO)

console.log(aprovados) //EXCLUIU DOIS ELEMENTOS E ADICIONOU 2 NO LUGAR.





