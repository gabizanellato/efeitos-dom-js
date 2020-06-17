// busca pelos li das imagens
const tabmenu = document.querySelectorAll('.js-tabmenu li')
// busca pelas sections das descrições
const tabcontent = document.querySelectorAll('.js-tabcontent section')

// verfica se possui valor, e se possuir, executa a função
if (tabmenu.length && tabcontent.length) {
  // adiciona classe ativo ao primeiro componente, para quando o usuario abrir a tela, n ficar vazio
  tabcontent[0].classList.add('ativo')

// funcão para adicionar e remover a classe ativo
  function activeTab(index) {
    tabcontent.forEach((section) =>
      section.classList.remove('ativo')
    )
    tabcontent[index].classList.add('ativo')
  }

// a declaração do evento de clicar e executar a função
  tabmenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index);
    })
  })
}
