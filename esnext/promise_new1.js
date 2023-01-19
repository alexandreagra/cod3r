let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
}) 
    //cumprirPromessa(3, 4) //Apenas o primeiro valor será cumprido, não sendo considerado o "4". Promises são cumprem um valor por promessa.

    //cumprirPromessa({
        // x: 3,
        // y: 4
    //})    //NESSE CASO, passando o valor como um objeto, a Promise pode retornar mais de um valor, podendo ser acessados os atributos individualmente com a notação correspondente:

    // console.log(valor.x OU valor.y)

    //Da mesma forma, com um Array: cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
    //... console.log(valor["indice"]) ou mesmo .then(valor => valor["indice"])

//console.log(typeof p) //Promessa tem valor de objeto!

// p.then(function(valor) {
//     console.log(valor)}) //Para acessar o valor prometido, utiliza-se o método ".then" com uma função envelopada, passando o valor como seu parâmetro. Apenas quando cumprida a promessa, a função será chamada.  

//p.then(valor => console.log(valor)) //Chamada do ".then" por arrow function. 
p.then(valor => valor) //Chamada do Array completo.
.then(valor => valor[0]) //chamada do primeiro item do array
.then(primeiro => primeiro[0]) //chamada da primeira letra do primeiro item do array. (reação sequenciada, .then a .then) 
.then(letra => letra.toLowerCase()) // perceba que agora seria a execução da chamada da primeira letra, sendo que é possível fazer o uso de algumas funcionalidades do JS no processamento, como o método "toLowerCase"
.then(letraMinuscula => console.log(letraMinuscula)) //Chamada da letra, com a modificação pra minúscula. Basta substituir os nomes dos parâmetros para que o método seja refeito com as modificações solicitadas. 


//É permitido chamar o método .then várias vezes para obter os resultados desejados.

//A princípio, o "let p" também não é necessário, eis que você pode fazer o chamamento aos métodos diretamente após a declaração "Promise", caso os métodos estejam pré-definidos em função anterior, como a seguir: 

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

new Promise(function(cumprirPromessa2) {
    cumprirPromessa2(['Ana', 'Bia', 'Carlos', 'Daniel'])
}) .then(primeiroElemento)
.then(primeiraLetra)
.then(console.log)

//Vários métodos em sequencia até chegar no resultado desejado. 

//Geralmente, ao invés de "cumprirPromessa" ou qualquer outro nome, é amplamente utilizado o termo "resolve", assim como o parâmetro "reject", caso a Promise seja rejeitada. 
