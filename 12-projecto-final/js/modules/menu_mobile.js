import clickOutside from "./outsideClick.js";

export default class MenuMobile {
    constructor(menu_button, menu_lista, eventos = ['click', 'touchstart'], activeClass = "active") {
        this.menu_button = document.querySelector(menu_button);
        this.menu_lista = document.querySelector(menu_lista);
        this.eventos = eventos;
        this.activeClass = activeClass; 

        this.openMenu = this.openMenu.bind(this);
    }
    openMenu(event) {
        event.preventDefault();
        this.menu_button.classList.add(this.activeClass);
        this.menu_lista.classList.add(this.activeClass);
        clickOutside(this.menu_lista, this.eventos, () => {
            this.menu_button.classList.remove(this.activeClass);
            this.menu_lista.classList.remove(this.activeClass);
        })
    }

    addMenuMobileEvents(){
       this.eventos.forEach((evt) => {
            this.menu_button.addEventListener(evt, this.openMenu);
        })
    }

    init(){
        if (this.menu_button && this.menu_lista) {
            this.addMenuMobileEvents();
        }
    }
}



