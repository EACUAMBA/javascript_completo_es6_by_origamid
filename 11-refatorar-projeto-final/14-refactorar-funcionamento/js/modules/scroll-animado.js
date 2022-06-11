import debounce from "./debounce.js";

//12 Animação ao Scroll
export default class ScrollAnima {

  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    //Retornando uma função com a aplicação do debounce, essa funçao nova, chamada checkDictance tem a sua execução atrasada em .20 segundos.
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  getDistance() {
    //Obtendo a distancia das sections em relação ao topo da página.
    this.distance = Array.from(this.sections).map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade)
      }
    })
  }

  checkDistance() {
    this.distance.forEach(({ element, offset }) => {
      //Verififca onde o scroll se encontra no momento e compara com a posição da section actual.
      if (window.pageYOffset > offset) {
        element.classList.add('activo')
      } else if (element.classList.contains('activo')) {
        element.classList.remove('activo');
      }
    }
    );
  }



  init() {
    if (this.sections.length) {
      this.getDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}