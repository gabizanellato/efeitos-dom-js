const imgs = document.querySelectorAll('img')

let i = 0;
imgs.forEach(function(){
  console.log(i++)
}) // for each passa por todos os componentes selecionados pelo query selector, nesse caso, as imagens (7)

imgs.forEach(function(item, index, array){
  console.log(item, index, array) 
}) // imprimi todos os items // item nome aleatorio para o elemento // index são numeros dos elementos // passa em forma de array e pode ser manipulado

const titulos = document.getElementsByClassName('titulo')
const tituloArray = Array.from(titulos) // transforma em array para utilizar o forEach

// Arrow function
 const lista = document.querySelectorAll('ul')
 
 lista.forEach((item) => console.log(item)) // retira a necessidade de function e se houver apenas um elemento, não precisa de parenteses // não precisa de chaves se houver apenas uma linha 

 // ------------- Exemplo -------------

 const links = document.querySelectorAll('a')

 // Versão maior
//  links.forEach(function(item, index){
//    console.log(item, index)
// }) 

// Versão resumida
links.forEach((item, index) => console.log(item,index))
