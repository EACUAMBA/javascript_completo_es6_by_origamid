import clickOutside from "./outsideClick.js";

export default function initDropdownMenu() {
    const clickEvents = ['click', 'touchstart'];
    const dropdown_menus = document.querySelectorAll("[data-dropdown]");

    dropdown_menus.forEach((item) => {
        clickEvents.forEach((userEvent) => {
            item.addEventListener(userEvent, handleClick)
        })
    });


    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active');
        clickOutside(this, clickEvents,() => {
            this.classList.remove('active');
        });
    }
}





