let Celcius = parseInt(Math.random()*101)
let Fahrenint = (9/5)*Celcius + 32
console.log (Celcius)
console.log (Fahrenint)




document.getElementById("elTemperaturaemC").textContent = `Celcius: ${Celcius}`;
document.getElementById("elTemperaturarmF").textContent = `Fahrenint: ${Fahrenint}`;