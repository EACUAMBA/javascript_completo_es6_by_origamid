export default function initTooltip(){
  
}

const tootips = document.querySelectorAll('[data-tooltip]');

tootips.forEach((tootip) => {
  tootip.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event){
  const tootipBox = criarTooltipBox(this);
  
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox)
  console.log(tooltipBox)
}

