const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //.pop remove o ultimo elemento de um Array.

pilotos.push('Verstappen')
console.log(pilotos) //SAI O MASSA E ENTRA VERSTAPPEN, NO MÉTODO .POP

pilotos.shift() //.shift remove o primeiro elemento de um Array.
console.log(pilotos)

pilotos.unshift('Hamilton') //.unshift adiciona um elemento na primeira posição do array. (push adiciona no final do array)
console.log(pilotos)

//Splice - remover ou adicionar

//Adicionando

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) //ADICIONADOS 2 ELEMENTOS A PARTIR DO ÍNDICE 2, EXCLINDO 0 ELEMENTOS

//Removendo

pilotos.splice(3, 1) //MASSA QUEBROU NOVAMENTE! EXCLUIU UM ELEMENTO, NO ÍNDICE 3.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //NOVO ARRAY GERADO A PARTIR DO ÍNDICE SELECIONADO. ELE CORTA O ARRAY PRA FAZER OUTRO SÓ COM OS ELEMENTOS QUE INTERESSAM.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //ÍNCIDE 1 ATÉ O 4 (O 4 já não entra)
console.log(algunsPilotos2)


