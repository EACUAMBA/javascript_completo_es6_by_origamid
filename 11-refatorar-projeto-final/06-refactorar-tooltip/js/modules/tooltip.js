export default class ToolTip {

  constructor(tooltip) {
    //Seleccionar com quem estamos falando
    this.tooltips = document.querySelectorAll(tooltip);
  }


//Adicionando o evento de mouseover em todos os elementos tooltip
  tooltips.forEach((tooltip) => {
  tooltip.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
  //recebendo o elemento tooltip
  const tooltipBox = criarTooltipBox(this);

  //colocando a posição na tela no eixo da ordenadas.
  tooltipBox.style.top = event.pageY + 'px';

  //colocando  a posição do eixo esquerda.
  tooltipBox.style.left = event.pageX + 'px';

  //podemos passar um objecto ao addEventListener mas ele deve ter um método handleEvent
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave)

  //Adicionando o evento de move do mouse.
  onMouseMove.tooltipBox = tooltipBox;
  onMouseMove.element = this;
  this.addEventListener('mousemove', onMouseMove);

}

//Estamos removendo os elementos tooltips para não apresentarem mais na tela e removendo os eventos.
const onMouseLeave = {
  tooltipBox: null,
  element: null,
  handleEvent(evt) {
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove);

  }
}

//Neste evento estamos actualizando as coordenadas do tooltip na tela.
const onMouseMove = {
  tooltipBox: null,
  element: null,
  handleEvent(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
    this.tooltipBox.style.left = event.pageX + 20 + 'px';
  }
}

function criarTooltipBox(element) {
  //Criando um elemento div
  const tooltipBox = document.createElement('div');

  //Pegando o dados do atributo aria-label que esta no elemento de tooltip.
  const text = element.getAttribute('aria-label');

  //Adicionando a classe tooltip no elemento criado que deverá aparecer ao passar o mouse.
  tooltipBox.classList.add('tooltip');

  //Colocando o texto no elemento tooltip
  tooltipBox.innerText = text;

  //Adicionando o elemento tooltip no body.
  document.body.appendChild(tooltipBox)

  //retornando o elemento tooltip
  return tooltipBox;
}
}


