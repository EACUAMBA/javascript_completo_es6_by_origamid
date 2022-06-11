export default class TabNav {

  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
    this.activo = "activo";
  }

  //Activa a tab de acordo com o index da mesma
  activateTab(index) {
    this.content.forEach(item => item.classList.remove(this.activo));
    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add(this.activo, direcao);

  }

  //Adiciona eventos as tabs
  addTabNavEvents() {
    this.menu.forEach((item, index) => {
      item.addEventListener("click", (event) => this.activateTab(index))
    });

  }

  init() {
    if (this.menu.length && this.content.length) {
      //Activar o primeiro item
      this.addTabNavEvents();
      this.activateTab(0)
      console.log("INIT")
    }
  }
}