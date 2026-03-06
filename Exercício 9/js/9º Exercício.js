let numero = parseInt(Math.random()*101)
let resultado
console.log(numero)
if (numero % 2 == 0) {
    resultado = numero * numero
    console.log(resultado)
    document.getElementById('elNumero').textContent = `Número sorteado: ${numero}`
    document.getElementById('elResultado').textContent = `O número é PAR e seu quadrado é: ${resultado}`
}
else {
    resultado = numero * numero * numero
    console.log(resultado)
    
    
    document.getElementById('elNumero').textContent = `Número sorteado: ${numero}`
    document.getElementById('elResultado').textContent = `O número é ÍMPAR e seu cubo é: ${resultado}`
}