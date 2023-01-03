const nums = [1, 2, 3, 4, 5]

//For com propósito!

let resultado = nums.map(function(e) { //Pode ser passado o "e" como "nums" também. O "e" é comumente utilizado pra identificar os "ELEMENTOS" de um array, não precisando passar o atributo, caso seja necessária a declaração do atributo de outra forma. 
    return e * 2 //tem que haver um retorno para que possa haver a transformação.
})

console.log(resultado)

const soma10 = e => e +10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //O map possibilita realizar várias declarações e acumular resultados.

console.log(resultado)