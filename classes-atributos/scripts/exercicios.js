// Add classe ativo a todos os itens do menu
const classeAtivo = document.querySelectorAll('.menu a')

classeAtivo.forEach((item) => {
  item.classList.add('ativo')
}); // for each passa por cada item e adiciona a classe

// Remova classe ativo dos itens do menus e mantenha o primeiro

classeAtivo.forEach((item) => {
  item.classList.remove('ativo')
})

classeAtivo[0].classList.add('.ativo')


// Verifique se imagens possuem alt
const identificarAlt = document.querySelectorAll('img')

identificarAlt.forEach((item) => {
  const imprimiAlt = item.hasAttribute('alt')
  console.log(imprimiAlt)
})


// Modifique o href do link externo do menu
const linkExterno = document.querySelector('a[href^="http"]')

linkExterno.setAttribute('href', 'https://www.google.com/')
