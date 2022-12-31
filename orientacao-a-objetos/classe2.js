class avo {
    constructor(sobrenome) {
        this.sobrenome = 'Silva'
    }
}


//Extends é a forma que você tem de declarar que a classe terá um protótipo

//Super chama a função construtora da super classe. No caso, a super classe de pai é "avo". o parâmetro sobrenome já declarado em avo, é passado com o this.
class pai extends avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super('Silva')
    }
}

const filho1 = new filho
console.log(filho1)

const pai1 = new pai
console.log(pai1)

//Mesmo conceito de herança por protótipos.