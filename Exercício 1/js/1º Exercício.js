let númerosorteado = parseInt(Math.random()*50)
console.log(númerosorteado)
let seusucessor = númerosorteado +1
console.log(seusucessor +1)
let seuantecessor = númerosorteado -1
console.log(seuantecessor -1)
let dobro = númerosorteado *2
console.log(dobro *2)
let metade = númerosorteado /2
console.log(metade /2)





document.getElementById("elNúmerointeiroSorteado").textContent = `Número Sorteado: ${númerosorteado}`;
document.getElementById("elSucessor").textContent = `Sucessor: ${seusucessor}`;
document.getElementById("elAntecessor").textContent = `Antecessor: ${seuantecessor}`;
document.getElementById("elDobrodoNúmero").textContent = `Dobro do Número: ${dobro}`;
document.getElementById("elMetadedoNúmero").textContent = `Metade do Número : ${metade}`;