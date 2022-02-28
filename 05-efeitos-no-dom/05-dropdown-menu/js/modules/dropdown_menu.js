export default function initDropdownMenu() {

}

const dropdown_menus = document.querySelectorAll("[data-dropdown]");

dropdown_menus.forEach((item) => {
    ['click', 'touchstart'].forEach((userEvent) => {
        item.addEventListener(userEvent, handleClick)
    })
});


function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active')
}
