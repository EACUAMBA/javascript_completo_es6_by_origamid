import clickOutside from "./outsideClick.js";

export default class DropdownMenu {
    constructor(dropdown_menus, activeClass = 'active', clickEvents = ['click', 'touchstart']) {
        this.dropdown_menus = document.querySelectorAll(dropdown_menus);
        this.clickEvents = clickEvents ;
        this.activeClass = activeClass;
        this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
    }

    addDropdownMenusEvent() {
        this.dropdown_menus.forEach((item) => {
            this.clickEvents.forEach((userEvent) => {
                item.addEventListener(userEvent, this.activeDropDownMenu)
            })
        });
    }

    activeDropDownMenu(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.toggle(this.activeClass);
        clickOutside(element, clickEvents, () => {
            element.classList.remove('active');
        });
    }

    init() {
        if (this.dropdown_menus.length)
        this.addDropdownMenusEvent();
        return this;
    }
}





