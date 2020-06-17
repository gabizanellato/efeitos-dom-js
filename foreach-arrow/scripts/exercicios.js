// Mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item) => console.log (item))

//  Textos dos paragrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText)
})


// Como corrigir o erro
const imagens = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index)
});

let contador = 0;
imagens.forEach(() => {
  console.log(contador++)
})

imagens.forEach(() => i++)