// DataSet deve possuir apenas um nome
const h1 = document.querySelector('h1')

console.log(Object.prototype.toString.call(h1)) // capaz de utilizar os elementos herdados

console.log(h1.dataset)

// div incluida para teste
const div = document.querySelector('div') // chamou a primeira div
const div2 = document.querySelector('[data-cor]') // onde contem data-cor
div.dataset.height = 1000 // inclui propriedade ao dataset
delete div.dataset.width // apaga width
console.log(div.dataset) // acessa a propriedade dentro de data


// -------- EXERCICIOS --------
// Add atributo data-anime="show-down" e data anime="show-right" a todas as sections com descrição dos animais
