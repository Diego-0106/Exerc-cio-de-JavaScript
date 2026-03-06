let Salario = 1500
let Comissao = (parseInt(Math.random()*201)*30)
let Total = Comissao + Salario

console.log(Salario)
console.log(Comissao)
console.log(Total)







document.getElementById("elSalario").textContent = `Salario: ${Salario}`;
document.getElementById("elComissao").textContent = `Comissao: ${Comissao}`;
document.getElementById("elTotal").textContent = `Total Recebido ao fim do mês: ${Total}`;
