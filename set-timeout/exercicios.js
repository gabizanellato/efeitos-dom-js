// mude a tela p azul e vermelho a cada 2s

function mudarClasse (){
  document.body.classList.toggle('active')
}

setInterval(mudarClasse, 4000);



// cronometro utilizando o setInterval.
// iniciar, pausar e resetar (duplo clique para salvar)

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0;
let timer

function iniciarTempo(){
  timer = setInterval(() => {
    tempo.innerText = i++
  }, 100);
  iniciar.setAttribute('disabled',  '')
}

function pausarTempo(){
  clearInterval(timer)
  iniciar.removeAttribute('disabled')
}

function resetarTempo(){
  tempo.innerText = 0
  i = 0
}