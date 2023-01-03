//OS OBJETOS, POR PADRÃO, NÃO POSSUEM O ATRIBUTO PROTOTYPE. POSSUEM APENAS O ATRIBUTO __PROTO__

//PROTOTYPE ESTÁ DIRETAMENTE RELACIONADO AO MAIS ALTO PATAMAR DE UM OBJETO, "O PAI DE TODOS"

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)

console.log(ferrari.__proto__)  
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {
    
}

console.log(typeof Object, typeof meuObjeto.prototype)

console.log(Object.prototype, meuObjeto.prototype)