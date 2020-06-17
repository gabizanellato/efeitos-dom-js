// Usuario clica nos links internos do site, Add classe ativo ao clicado e remova dos demais itens. Previna o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]')

function adicionaClasse(event){
  event.preventDefault();
  linkInterno.forEach((item) => {
    item.classList.remove('ativo')
  })

  this.classList.add('ativo')
}

linkInterno.forEach((item) => {
  item.addEventListener('click', adicionaClasse)
})

// Todos os elementos do site começando a partir de body, mostre quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *') // retorna todos os elementos do site, dentro do body

function handleItem(event){
  console.log(event.currentTarget)
}

todosElementos.forEach((item) => {
  item.addEventListener('click', handleItem)
})

// No codigo anterior, remova o elemento que esta sendo clicado

// adicionar remove () ao codigo
// function handleItem(event){
//   console.log(event.currentTarget.remove())
// }


// Se o usuario clicar em T, aumenta letras do site
function handleClick(event){
  console.log(event.key)
  if (event.key === 't') {
    document.documentElement.classList.toggle('texto-maior')
  } // documentElement fala com todo HTML
// toggle remove e adiciona
}

window.addEventListener('keydown', handleClick)