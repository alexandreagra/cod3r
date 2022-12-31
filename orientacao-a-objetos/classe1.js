class lancamento {
    constructor(nome = 'Genérico', valor = 0)  {
        this.nome = nome
        this.valor = valor
    } 
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(... lancamentos) {
        lancamentos.forEach(e => this.lancamentos.push(e))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(e => {
            valorConsolidado += e.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salario', 45000)

const contaDeLuz = new lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())