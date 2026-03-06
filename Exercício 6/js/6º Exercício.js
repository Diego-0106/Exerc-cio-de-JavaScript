let HorasTrabalhadas = parseInt(Math.random() * 251)
let Dependentes = parseInt(Math.random() * 7)
let SalarioBruto = (HorasTrabalhadas * 168) + (Dependentes * 80)
let DescontoINSS = (SalarioBruto * 0.085).toFixed(2)
let DescontoIR = (SalarioBruto * 0.05).toFixed(2)
let SalarioFinal = (SalarioBruto - DescontoINSS - DescontoIR).toFixed(2)
console.log(HorasTrabalhadas)
console.log(Dependentes)
console.log(SalarioBruto)
console.log(DescontoINSS)
console.log(DescontoIR)
console.log(SalarioFinal)










document.getElementById('elSalarioBruto').textContent = `Salário bruto = ${SalarioBruto}`
document.getElementById('elDescontoINSS').textContent = `Desconto do INSS = ${DescontoINSS}`
document.getElementById('elDescontoIR').textContent = `Desconto do IR = ${DescontoIR}`
document.getElementById('elSalarioFinal').textContent = `Salário final = ${SalarioFinal}`