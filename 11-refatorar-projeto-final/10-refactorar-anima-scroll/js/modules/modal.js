export default class Modal {

  constructor(botaoAbrir, botaoFechar, botaoLogin, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.botaoLogin = document.querySelector(botaoLogin
      );
      this.containerModal = document.querySelector(containerModal);
      
    this.activo = 'activo';

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickForaDoModal = this.clickForaDoModal.bind(this)
  }

  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal(event);
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.activo)
  }

  clickForaDoModal(event) {
    if (event.target === this.containerModal)
      this.eventToggleModal(event);
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal)
    this.botaoFechar.addEventListener('click', this.eventToggleModal)
    this.containerModal.addEventListener('click', this.clickForaDoModal)
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.botaoLogin) {
      this.addModalEvents();
      return this;
    }
  }
}

