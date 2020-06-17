// ---------- ANIMAIS FANTASTICOS -------------
function initTabNav() {
  // busca pelos li das imagens
  const tabmenu = document.querySelectorAll('.js-tabmenu li')
  // busca pelas sections das descrições
  const tabcontent = document.querySelectorAll('.js-tabcontent section')

  // verifica se possui valor, e se possuir, executa a função
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
}

initTabNav(); // função foi criada para isolar o codigo dentro de um escopo, evitando erros com nomes de variaveis iguais

// ----------------- FAQ ---------------------
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  if (accordionList.length) {
    accordionList[0].classList.add('ativo')
    accordionList[0].nextElementSibling.classList.add('ativo')

    function activeAccordion() {
      this.classList.toggle('ativo')
      this.nextElementSibling.classList.toggle('ativo') // this faz referencia ao item . proximo item abaixo
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion();

// -------------- Scroll Suave ---------------
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrolltoSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    //   const topo = section.offsetTop;
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth"
    //   }) 
  }

  linksInternos.forEach((item) => {
    item.addEventListener('click', scrolltoSection)
  })
}

initScrollSuave();