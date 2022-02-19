//09 - Navegação por tab
//use novas classe ou o atributo data para manipular o dom, não use classes do css, elas podem mudar.

function initTab(){
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
initTab();

//10 - Accordion List
function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  if(!accordionList.length){
    return;
  }
 
const activoClass = "activo";

accordionList[0].classList.add(activoClass);
accordionList[0].nextElementSibling.classList.add(activoClass);
function activeAccordion(event){
  this.classList.toggle(activoClass);
  this.nextElementSibling.classList.toggle(activoClass);
}

accordionList.forEach((item)=>{
  item.addEventListener("click", activeAccordion)
});
}
initAccordion();

//11-Scroll Suave
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const sectionSelecionada =document.querySelector(href);
  // const distanciaDoTopo = sectionSelecionada.getBoundingClientRect().top;
  const distanciaDoTopo = sectionSelecionada.offsetTop;

  // window.scrollTo({
  //   top: distanciaDoTopo,
  //   behavior: "smooth"
  // });

  //formaArternativa
  sectionSelecionada.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

linksInternos.forEach((link)=>{
  link.addEventListener("click", scrollToSection)
});
}
initScrollSuave();

//12 Animação ao Scroll
function animacaoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(!sections.length){
    return;
  }
const windowMetade= window.innerHeight * 0.6;
function animaScroll(event){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top;
    sectionTopMais40Porcento = sectionTop  - windowMetade;
   if(sectionTopMais40Porcento < 0)
     section.classList.add("activo")
   else
    section.classList.remove("activo")
   
  })
}
window.onscroll = animaScroll;
animaScroll();
}
animacaoScroll()