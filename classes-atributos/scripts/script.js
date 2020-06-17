// --------------- Classes ---------------
const menu = document.querySelector('.menu');

menu.classList // retorna as classes
menu.classList[0] // 1º classe
menu.classList.add('ativo') // Adiciona classe
menu.classList.remove('azul') // Apaga classe
console.log(menu)

if(menu.classList.contains('ativo')){
  menu.classList.add('e-ativo')
} // caso exista essa classe, adiciona outra

// -------------- Atributos ----------------
const animais = document.querySelector('.animais')

console.log(animais.attributes.id)
console.log(animais.attributes.class) // esse atributo possui uma classe e um id, retorna os dois
 // esse atributo possui uma classe e um id, retorna os dois

 // GetAttibute -- busca atributo
 const img = document.querySelector('img')
 console.log(img.getAttribute('alt')) // retorna atributos

 // setAttribute -- altera/adiciona atributo
 img.setAttribute('alt', 'é uma raposinha')

 // hasAttribute -- possui atributo
 const possuiAlt = img.hasAttribute('src'); // true

