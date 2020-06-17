// Distancia da primeira imagem em relação ao topo da pagina
const primeiraImagem = document.querySelector('img')

const topoPagina = primeiraImagem.getBoundingClientRect();

console.log(topoPagina.top)

// ou

const topoImagem = primeiraImagem.offsetTop
console.log(topoImagem)


// Soma da largura de todas as imagens
// Depois da pagina carregar, vai realizar a função
function somaImagens(){
  const imagens = document.querySelectorAll('img')

  let soma = 0
  imagens.forEach(item => {
    soma += item.offsetWidth // soma de larguras
  });
  console.log(soma)
}

window.onload = function(){
  somaImagens();
}


// Links da pagina possuem o minimo para tela utilizadas com o dedo. (48px/48px)
const linkPaginas = document.querySelectorAll('a')

linkPaginas.forEach((item) => {
  const linksWidth = item.offsetWidth;
  const linksHeight = item.offsetHeight;
  if(linksWidth > 48 && linksHeight > 48){
    console.log(item, 'Acessivel')
  } else{
    console.log(item, 'Não é acessivel')
  }
})


// Se browser < que 720p, add classe menu-mobile
const browserSmall = window.matchMedia('(max-width: 720 px)').matches
if(browserSmall){
  const menu = document.querySelector('.menu')
  menu.classList.add('.menu-mobile')
}