const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework) // utilizado método get para obter atributos a partir do "MAP"

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])
chavesVariadas.forEach*((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) //O parâmetro "HAS" serve pra indicar se existe um determinado elemento dentro do "MAP"
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //O parâmetro "SIZE" indica quantos elementos existem dentro do "MAP"

chavesVariadas.set(123, 'a') //Adiciona um valor específico a um parâmetro dentro do "MAP"
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)