let A = parseInt(Math.random()*20) + 1
let B = parseInt(Math.random()*20)
let C = parseInt(Math.random()*20)

let X = (C - B) / A

console.log(A,B,C)
console.log(X)

document.getElementById('elA').textContent = `Valor de A: ${A}`
document.getElementById('elB').textContent = `Valor de B: ${B}`
document.getElementById('elC').textContent = `Valor de C: ${C}`
document.getElementById('elX').textContent = `Valor de X: ${X}`