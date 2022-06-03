
export default class Accordion {

  constructor(list){
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "activo";

  }

  //iniciar funcao
  init(){
    if (this.accordionList.length) {
      this.addAccordionEvent();
      //activar primeiro item
      this.toggleAccordion(this.accordionList[0])
      }
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activoClass);
    item.nextElementSibling.classList.toggle(this.activoClass);
  }

  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item))
    });
  }
}
