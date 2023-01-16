require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' //utilizado método freeze no global.js
console.log(MinhaApp.nome)