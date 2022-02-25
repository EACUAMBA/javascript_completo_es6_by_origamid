
export default function initAccordion(){
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