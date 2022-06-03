import clickOutside from "./outsideClick.js";

export default function initMenuMobile(){
    const menu_button = document.querySelector('[data-menu="button"]');
    const menu_lista = document.querySelector('[data-menu="lista"]');
    const eventos = ['click', 'touchstart'];

   if(menu_button  && menu_lista){
       eventos.forEach((evt)=>{
           menu_button.addEventListener(evt, openMenu);
       })

       function openMenu(event) {
           menu_button.classList.add("active");
           menu_lista.classList.add("active");
           clickOutside(menu_lista, eventos, ()=>{
               menu_button.classList.remove("active");
               menu_lista.classList.remove("active");
           })
       }
   }

}



