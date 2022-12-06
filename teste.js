var lines = input.split('\n');

const nome = lines.shift();
let salario = parseFloat(lines.shift());
let totVendas = parseFloat(lines.shift());
let totCom = totVendas * 0.15;
let salarioFinal = salario + totCom;

console.log("TOTAL = R$ " + salarioFinal.toFixed(2));




//ganha 15% sobre vendas - toFixed(2)
