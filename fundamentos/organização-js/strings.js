const escola = 'Cod3r'

console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charAt(5)) //RETORNOU VAZIO PORQUE O NOME SÓ TEM 5 LETRAS E O ÍNDICE INICIA EM ZERO
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //DO INDICE, QUANTIDADE DE CARACTERES
console.log('Escola'.concat(escola).concat('!'))
console.log('Escola' + escola + '!')
console.log(escola.replace(3, 'e')) //SUBSTITUIÇÃO
console.log(escola.replace(/\w/g, 'e')) //REGEX
console.log('Ana, Maria, Pedro'.split(','))