let numeroSorteado1 = parseInt(Math.random()*101)
let numeroSorteado2 = parseInt(Math.random()*101)
let somaDosNumeros = numeroSorteado1 + numeroSorteado2
let resultadoFinal
console.log(numeroSorteado1, numeroSorteado2)
console.log(somaDosNumeros)
if (somaDosNumeros <= 100) {
resultadoFinal = somaDosNumeros * 3
console.log(resultadoFinal)
    





document.getElementById('elResultadoFinal').textContent = `Como a soma é menor ou igual a 100, (${somaDosNumeros} × 3) = ${resultadoFinal}`
}
else {
    resultadoFinal = somaDosNumeros * 5
    console.log(resultadoFinal)
    document.getElementById('elResultadoFinal').textContent =
    `Como a soma é maior que 100, (${somaDosNumeros} × 5) = ${resultadoFinal}`
}






document.getElementById('elNumeroSorteado1').textContent = `Primeiro número sorteado: ${numeroSorteado1}`
document.getElementById('elNumeroSorteado2').textContent = `Segundo número sorteado: ${numeroSorteado2}`
document.getElementById('elSomaDosNumeros').textContent = `Soma dos números sorteados: ${somaDosNumeros}`