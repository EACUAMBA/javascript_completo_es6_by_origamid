//12 Animação ao Scroll
export default class ScrollAnima {

  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll(event) {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      let sectionTopMais40Porcento = sectionTop - this.windowMetade;
      if (sectionTopMais40Porcento < 0)
        section.classList.add("activo")
      else if (section.classList.contains("activo"))
        section.classList.remove("activo")

    })
  }


  init() {
    window.addEventListener('scroll', this.animaScroll);
  }
}