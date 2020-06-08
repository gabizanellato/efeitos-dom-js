// Set TimeOut

// retorna depois de um tempo
function espera (teste){
  console.log('Passsou 0')
}

const btn = document.querySelector('button')
btn.addEventListener('click', handleClick)

function handleClick(){
  setTimeout(() => {
    console.log(this)
    this.classList.add('ativo') // utilizar this
  }, 1000 )
}

setTimeout(() => {
  console.log('Testando')
}, 1000) // retorna testando dps de 1 seg

// não é recomendado
// for(let i=0; i < 20; i++){
//   setTimeout(() => {
//     console.log(i)
//   }, 1000 * i) // loop imprimi numeros de acordo com o tempo, numero * 1 
// }


// Set Interval -- repetidamente, n tem pausa
function loop(texto){
  console.log(texto)
}

// var i = 0
// setInterval(() => {
//   console.log(i++)
// }, 2000, 'oi');

// Clear Interval - interrompe
var i = 0
const meuLoop = setInterval(() => {
  console.log(i++)
  if(i > 20){
    clearInterval(meuLoop)
  }
}, 2000, 'oi');