export default function initTab(){
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
const tabcontent = document.querySelectorAll('[data-tab="content"] section');

if(tabmenu.length && tabcontent.length){
tabcontent[0].classList.add("activo");
//Vamos remover dos elemento a class activo depois adicionar classe de acordo com o numero que eu passar, o numero é a posição no array.
function activateTab(index){
  tabcontent.forEach(item=>item.classList.remove("activo"));
  const direcao = tabcontent[index].dataset.anime;
  tabcontent[index].classList.add("activo", direcao);
  console.log(tabcontent[index])
}

tabmenu.forEach((item, index)=>{
  item.addEventListener("click", (event)=>{
    activateTab(index);
    console.log(event);
  })
});
}
}