const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}

console.log(JSON.stringify(obj))
//NÃO PASSA A FUNÇÃO, POIS O JSON TRABALHA APENAS COM DADOS.

//console.log(JSON.parse("{a: 1, b: 2, c: 3}"))

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // OS CÓDIGOS ACIMA NÃO FUNCIONARIAM. OS ATRIBUTOS EM JSON DEVEM SER REPRESENTADO POR ASPAS DUPLAS. 

console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // AS STRINGS EM JSON TAMBÉM DEVEM SER REPRESENTADAS POR ASPAS DUPLAS. NÚMEROS E BOOLEANS NÃO PRECISAM. TAMBÉM SUPORTA OUTROS OBJETOS E ARRAYS, ALÉM DE PONTOS FLUTUANTES.

//ACESSE JSONLINT.COM PARA VALIDAÇÃO DE CÓDIGOS JSON, COM A RESPECTIVA FORMATAÇÃO (MAIS RAPIDO E MAIS FACIL)

