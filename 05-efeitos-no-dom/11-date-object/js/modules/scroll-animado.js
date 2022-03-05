//12 Animação ao Scroll
export default function animacaoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(!sections.length){
    return;
  }
const windowMetade= window.innerHeight * 0.6;
function animaScroll(event){
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top;
    let sectionTopMais40Porcento = sectionTop  - windowMetade;
   if(sectionTopMais40Porcento < 0)
         section.classList.add("activo")
   else if(section.classList.contains("activo"))
    section.classList.remove("activo")
   
  })
}
window.onscroll = animaScroll;
animaScroll();
}