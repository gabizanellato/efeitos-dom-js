const img = document.querySelector('img')

function eventoClicar(event){
  console.log(event);
} img.addEventListener('click', eventoClicar)

// Clicando na lista de animais
const animaisLista = document.querySelector('.animais-lista')

function calbacklista(event){
  console.log(event.target);
}
animaisLista.addEventListener('click', calbacklista)

// PreventDefault = Sair do padrão
// Retirar o padrão, impedir que o clique aconteça para outro link
const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(event){
  event.preventDefault();
  console.log('Clicou')
}

linkExterno.addEventListener('click', handleLinkExterno)

//  This = Faz referencia a diferentes objetos. Referencia de elementos do addEventListener

// Eventos 
const h1 = document.querySelector('h1');
function handleEvent(event){
  console.log(event.type, event) // retorna o tipo do evento e os eventos.
}

// eventos no primeiro titulo
h1.addEventListener('click', handleEvent)
h1.addEventListener('mouseenter', handleEvent)

// Eventos na janela
// window.addEventListener('scroll', handleEvent) // cada scroll
// window.addEventListener('keydown', handleEvent) // clicar no teclado

// -------------------- Keyboard --------------------
function handleKey(event){
  if(event.key === 'f'){
    document.body.classList.toggle('fullscreen')
  }
}
window.addEventListener('keydown', handleKey)
// se o usuario clicar em f, adiciona e remove(toggle) a classe fullscrem

// -------------------- ForEach -------------------
const imagens = document.querySelectorAll('img')

function handleImg(event){
  console.log(event.target.getAttribute('alt'));
}

imagens.forEach((item) =>{
  item.addEventListener('click', handleImg)

})


