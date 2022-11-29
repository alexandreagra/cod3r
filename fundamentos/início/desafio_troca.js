let a = 7
let b = 94

let temp = a

a = b
b = temp

console.log([a, b] = [b, a])

//depois da troca... a = 94 e b = 7

console.log(a)
console.log(b)