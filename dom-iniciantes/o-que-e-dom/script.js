// Principais objetos

//window é global
// window.alert('hello world')

// seleciona o primeiro elemento h1
const h1Selecionado = document.querySelector('h1')

// Métodos e propriedades
// h1Selecionado.innerText
// h1Selecionado.classList
// h1Selecionado.id
// h1Selecionado.offsetHeight

function callback(){
  console.log('Clicou')
}

h1Selecionado.addEventListener('click', callback())



