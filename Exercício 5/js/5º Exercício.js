let base = parseInt(Math.random()*51)
let altura = parseInt(Math.random()*51)
let area = (base*altura)/2
console.log(base, altura)
console.log(area)







document.getElementById('elBase').textContent = `Base = ${base} `
document.getElementById('elAltura').textContent = `Altura = ${altura} `
document.getElementById('elArea').textContent = `Area = ${area} `