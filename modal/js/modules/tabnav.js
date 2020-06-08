// ---------- ANIMAIS FANTASTICOS -------------
export default function initTabNav() {
  // busca pelos li das imagens
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li')
  // busca pelas sections das descrições
  const tabcontent = document.querySelectorAll('[data-tab="content"] section')

  // verifica se possui valor, e se possuir, executa a função
  if (tabmenu.length && tabcontent.length) {
    // adiciona classe ativo ao primeiro componente, para quando o usuario abrir a tela, n ficar vazio
    tabcontent[0].classList.add('ativo')

    // funcão para adicionar e remover a classe ativo
    function activeTab(index) {
      tabcontent.forEach((section) =>
        section.classList.remove('ativo')
      )
      const direcao = tabcontent[index].dataset.anime
      tabcontent[index].classList.add('ativo', direcao)
    }

    // a declaração do evento de clicar e executar a função
    tabmenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      })
    })
  }
}

//initTabNav(); // função foi criada para isolar o codigo dentro de um escopo, evitando erros com nomes de variaveis iguais