//11-Scroll Suave
export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start"
      }
    } else this.options = options;

    //Serve para mudar a referencia do this dentro da função, agora o  this desta função não será mais o this do event target mas sim da classe.
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sectionSelecionada = document.querySelector(href);
    const distanciaDoTopo = sectionSelecionada.offsetTop;

    sectionSelecionada.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection)
    });
  }

  init() {
    //Verificando se a pessoa definiu um link para adicionarmos o evento nele.
    if (this.linksInternos)
      this.addLinkEvent();
    return this;
  }
}