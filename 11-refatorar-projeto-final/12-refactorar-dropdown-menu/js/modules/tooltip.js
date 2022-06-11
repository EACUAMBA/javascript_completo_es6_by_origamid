export default class ToolTip {

  constructor(tooltip) {
    this.tooltips = document.querySelectorAll(tooltip);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  addTooltipEvent() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseover', this.onMouseOver);
    })
  }

  onMouseOver({currentTarget}) {
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave)
    currentTarget.addEventListener('mousemove', this.onMouseMove);
  }

  //Remove os estilos quando o mouse saí do elemento.
  onMouseLeave({currentTarget}) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  //Move a tooltip com base nos estilos de acordo com a posição do mouse
  onMouseMove(event) {
    if(event.pageX + 190 > window.innerWidth){
      this.tooltipBox.style.left = event.pageX + 190 + 'px';
    }else{
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    
    }
    this.tooltipBox.style.top = event.pageY + 20 + 'px';
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox;
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}


