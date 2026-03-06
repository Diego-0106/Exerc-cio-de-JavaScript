let peso = parseInt(Math.random()*201)
let pesoGordo = peso - (peso * 0.2)
let pesoMagro = peso + (peso * 0.2)
console.log (peso)
console.log (pesoGordo, pesoMagro)





document.getElementById('elPeso').textContent = `Peso: ${peso} kg`;
document.getElementById('elPesoGordo').textContent = `Peso após emagrecer -20%:  ${pesoGordo} kg`;
document.getElementById('elPesoMagro').textContent = `Peso após engordar +20%:  ${pesoMagro} kg`;