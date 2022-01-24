//Navegação por tab
//use novas classe ou o atributo data para manipular o dom, não use classes do css, elas podem mudar.

const tabmenu = document.querySelectorAll(".js-tabmenu li");
const tabcontent = document.querySelectorAll(".js-tabcontent section");

if(tabmenu.length && tabcontent.length){
tabcontent[0].classList.add("activo");
//Vamos remover dos elemento a class activo depois adicionar classe de acordo com o numero que eu passar, o numero é a posição no array.
function activateTab(index){
  tabcontent.forEach(item=>item.classList.remove("activo"));
  tabcontent[index].classList.add("activo")
}

tabmenu.forEach((item, index)=>{
  item.addEventListener("click", (event)=>{
    activateTab(index);
    console.log(event);
  })
});
}