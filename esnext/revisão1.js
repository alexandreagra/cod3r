// let e const

{ 
    var a = 2
    let b = 3 
    console.log(b)
}
console.log(a)
//console.log(b) -> Let tem escopo de bloco, não sendo lida fora dele. 

// Template String

const produto = 'iPad'
console.log(`${produto} é caro`) //Não aceita quebra de linha, importante lembrar. 

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // após
console.log(x, y)

const { idade: i, nome} = { nome: 'Ana', idade: 9}
console.log(i, nome)