const { error } = require('console')
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// OU MAIS FACILMENTE.

const config = require('./arquivo.json')
console.log(config.db)

// LENDO UMA PASTA

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
}) // __dirname representa o diretório atual.