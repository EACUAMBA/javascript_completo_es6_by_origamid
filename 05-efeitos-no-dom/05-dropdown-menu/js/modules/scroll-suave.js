//11-Scroll Suave
export default function initScrollSuave(){
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