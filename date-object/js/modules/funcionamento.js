export default function initFuncionamento (){

  const funcionamento = document.querySelector('[data-semana]')
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number) // puxa valor de data, em um dataset e transforma em um array
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number) // puxa valor de data, em um dataset e transforma em um array
  
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()
  
  // const teste = [1,2,3,4,5].indexOf(5) // se o dia que eu estou possui no array
  const semanaAberta = diaSemana.indexOf(diaAgora) !== -1
  
   const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])
  
   if(semanaAberta && horarioAberto){
     funcionamento.classList.add('aberto')
   }
  
  console.log(semanaAberta)
}



// EXEMPLO // quanto falta para o natal
// const agora = new Date ()
// console.log(agora.getMonth()) // objeto
// const natal = new Date('December 25 2020 23:59')

// function converterDias (tempo){
//   return tempo / (24 * 60 * 60 * 1000) // horas, minutos, segundo, mili
// }

// const diasAgora = converterDias(agora)
// const diasNatal = converterDias(natal)

// const faltam = diasNatal - diasAgora
// console.log(faltam)

