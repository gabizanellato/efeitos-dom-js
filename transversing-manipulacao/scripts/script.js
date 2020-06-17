const h1 = document.querySelector('h1')

// h1.outerHTML = 'Novo titulo' // substitui
//h1.innerHTML = 'Novo titulo' // sobrescreve


// Tranversing -- navegar dom
const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement, // busca o pai
lista.nextElementSibling, //busca o proximo elemento
lista.previousElementSibling, // busca o anterior 
lista.children, // filhos
lista.children[3] // puxa o quarto elemento
)

const ultimoElemento = lista.querySelector('li:last-child') // declarado igual css, busca dentro da lista
console.log(ultimoElemento)

// --------- Element vs Node ----------------
lista.previousElementSibling // busca o elemento acima
lista.previousSibling // busca o que estiver acima, espaço, comentario..

const animais = document.querySelector('.animais')
const contato = document.querySelector('.contato')
const titulo = contato.querySelector('.titulo')

// ---->  lista.appendChild(titulo) //  move para ultimo item da lista // primeiro o local e depois o que quer inserir
// ----> contato.insertBefore(animais, titulo) // local. o que vai inserir e antes de quem
// ----> contato.removeChild(titulo) // remover

const novoh1 = document.createElement('h1')
novoh1.innerText = 'Novo titulo'
novoh1.classList.add('titulo')
contato.appendChild(novoh1) // cria um h1, com classe, texto e add depois do elemento contato

// Ele pega o elemento e muda de lugar, mas não clona
const h1importante = document.querySelector('h1');
const faq = document.querySelector('.faq')

// com cloneNode, é possivel clonar
const cloneh1 = h1importante.cloneNode(true)
faq.appendChild(cloneh1)
