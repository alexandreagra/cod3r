const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()

//O VALOR QUE APARECE NO CONSOLE É O "LOCAL", POR CAUSA DO CONTEXTO EM QUE ELA FOI DECLARADA.

//NO CASO, CASO VOCÊ UTILIZE A MESMA VARIÁVEL - constante - EM OUTRA FUNÇÃO, A FUNÇÃO UTILIZARÁ O VALOR JÁ DECLARADO EM FUNÇÃO ANTERIOR.