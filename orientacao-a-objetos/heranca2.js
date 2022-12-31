// Cadeia de protótipos (Prototype chain)

//PARA ACESSAR ATRIBUTOS DE UM OBJETO PAI, DEVERÁ SER ESCRITO "__proto__: AtributoPai, atributosSEcundarios..."

Object.prototype.attr0 = 'Z' //Não é recomendado colocar atributos no próprio Object.prototype.
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'D' }
const filho = { __proto__: pai, attr3: 'C'} // O ATRIBUTO attr3 já foi definido antes, então, fica sobreescrita no próximo.

console.log(filho.attr1, filho.attr0, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing, acontece quando você tem uma variavel local dentro de uma funcão, essa variavel pode sombrear variáveis de escopo mais abrangente. 
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //O super é utilizado para chamar o método do protótipo específico da função, não sendo o global já declarado anteriormente.
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
//setPrototypeOf estabelece uma relação entre protótipos.


console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
