// ----------- Get Element - (Html) ----------
const animais = document.getElementById('animais')
console.log(animais.innerText) // retorna texto do ID

const gridSection = document.getElementsByClassName('grid-section') // retorna elementos da classe
const listas = document.getElementsByTagName('ul') // retorna todos os ul
console.log(gridSection, listas)

gridSection[1] // retorna a 2º classe 

// ------------- Query Selector ---------------
// retorna o primeiro 

const copy = document.querySelector('.copy'); // retorna qualquer elemento

const primeiroUl = document.querySelector('ul'); // busca na visão geral do documento
const ulLI = primeiroUl.querySelector('li') // busca dentro dos UL

const linksInternos = document.querySelector('[href^="#"]') 

// ------------- Query Selector All -----------
// (Node)
const selecionaImg = document.querySelectorAll( '.animais img')
console.log(selecionaImg[1]) // retorna 2º imagem dentro de animais

// -------------- Diferenças --------------
const gridHTML = document.getElementsByClassName('grid-section');
const gridNode = document.querySelectorAll('.grid-section');

// primeiroUl.classList.add('grid-section') --> adicionando uma nova classe, o query selector n reconhece, pois é estático

gridNode.forEach(function(item, index){
  console.log(item)
}) //loop que retorna todas as classes. apenas o node tem forEach


