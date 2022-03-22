export default function clickOutside(element, clickEvents,callback) {
    //Retorna o elemento HTML
    const html = document.documentElement;
    const dataOutside = 'data-outside';

    if (!element.hasAttribute(dataOutside)) {
        clickEvents.forEach(userEvent=>{
            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
        })
        element.setAttribute(dataOutside, '');
    }

    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(dataOutside);
            callback();
            clickEvents.forEach((userEvent)=>{
                html.removeEventListener(userEvent, handleOutsideClick)
            })
        }
    }
}