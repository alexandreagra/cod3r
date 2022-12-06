function pessoa() {
    this.idade = 0

    //const self = this
    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)
    //TANTO PODE SER USADO O BIND PRA CATEGORIZAR O THIS OU O THIS COMO CONSTANTE
}

new pessoa