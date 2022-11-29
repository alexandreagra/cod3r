const valores = [7.7, 8.9, 6.3, 9.2,]
console.log(valores[0], valores[3])
console.log(valores[4]) //NÃO EXISTE, COMEÇA DE 0 E SÓ FORAM DECLARADOS 4 valores

valores[4] = 10
console.log(valores) //VAI INFORMAR A QUANTIDADE DE ARRAYS VAZIOS
console.log(valores.length)


valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())

console.log(typeof valores)