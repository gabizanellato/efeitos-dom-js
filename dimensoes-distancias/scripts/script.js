const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.clientHeight // altura do elemento

const animaisTop = listaAnimais.offsetTop
console.log(animaisTop) // distancia entre o elemento e o topo da pagina

const distanciaLeft = document.querySelector('h2')
const left = distanciaLeft.offsetLeft
console.log(left) // distancia do elemento e a esquerda da pagina

// --------- getBoundingClientRect ---------
 const quadrado = distanciaLeft.getBoundingClientRect();
 console.log(quadrado) // distancia do elemento em cada propriedade

 // considerado um array, podendo usar todos os valores 
 quadrado.top 
 quadrado.bottom 
 
 
 if(quadrado.top < 0) {
  console.log('Passou do elemento')
}

 // --------- Window ------------
 console.log(
  window.innerWidth, // largura da tela
  window.outerHeight, // altura da tela
  window.innerHeight,
  window.pageYOffset // altura do scroll da tela
 ); // tamanhos da janela do usuario

 // ----------- Match Media ---------------
 // Verifica altura do browser, declarado igual CSS 
 const small = window.matchMedia('(max-width = 600px)');
 if(small.matches){
   console.log('Usuario mobile')
 } // .matches = true or false

