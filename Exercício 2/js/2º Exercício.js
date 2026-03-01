let Nota1 = parseInt(Math.random()*11)
let Nota2 = parseInt(Math.random()*11)
let Nota3 = parseInt(Math.random()*11)
let Nota4 = parseInt(Math.random()*11)
let Média = (Nota1 + Nota2 + Nota3 + Nota4)/4
console.log (Nota1)
console.log (Nota2)
console.log (Nota3)
console.log (Nota4)
console.log (Média)








document.getElementById("elN1").textContent = `Nota1: ${Nota1}`;
document.getElementById("elN2").textContent = `Nota2: ${Nota2}`;
document.getElementById("elN3").textContent = `Nota3: ${Nota3}`;
document.getElementById("elN4").textContent = `Nota4: ${Nota4}`;
document.getElementById("elMédia").textContent = `Média: ${Média}`;
