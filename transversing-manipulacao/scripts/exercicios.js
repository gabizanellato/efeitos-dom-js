// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const menuCopia = menu.cloneNode(true)

copy.appendChild(menuCopia)

// Selecione o 1º DT da dl de faq
const faqText = document.querySelector('.faq')
const primeiroDt = faqText.querySelector('dt')

console.log(primeiroDt)

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd)

// SUbstitua o conteudo HTML de .faq pelo de .animais

const conteudoFaq = document.querySelector('.faq')
const conteudoAnimais = document.querySelector('.animais')

conteudoFaq.innerHTML = conteudoAnimais.innerHTML