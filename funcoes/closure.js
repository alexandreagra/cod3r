//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função. 
//
const contexto = () => console.log('C.o.n.t.e.x.t.o l.é.x.i.c.o<= em ação!')
contexto()
//

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

