function soma (...valores) {
    var total = 0

    for (const item of valores) {
      total += parseInt(item)  
    }

    return total
  }

  console.log(soma(1, 2, 3, 4, 50, 10, 23))