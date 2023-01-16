// Interagindo com o console, entrada e saída. 

const anonimo = process.argv.indexOf('-a') !== -1 //pegando parâmetros diretamente no termina, testando "node + nome do arquivo com a flag -a"
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') //stdout = standard output
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { //stdin = standard input
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome} !! \n`)
        process.exit()
    }) 
}