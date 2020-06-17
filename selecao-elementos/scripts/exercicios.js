// Retorne todas as imagens do site
const imagemSite = document.querySelectorAll('img') // tag img
console.log(imagemSite)

// Retorne apenas as imagens que começam com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]') // busca por src

// Links internos onde href começa com #
const links = document.querySelectorAll('[href^="#"]') // ^ comecem com

// Selecione o primeiro h2 dentro de .animais-descricao
const descricaoAnimais = document.querySelector('.animais-descricoes h2')
// primeiro a classe e depois o h2, por padrão, o query selector ja seleciona o primeiro.. outra forma:

const descricaoAnimais2 = document.querySelector('.animais-descricoes')
const descricaoH2 = descricaoAnimais2.querySelector('h2')

// Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p') // busca todos os p
console.log(paragrafos[paragrafos.length - 1]); // usado em formade array
