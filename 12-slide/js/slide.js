export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);

    this.dist = { finalPosition: 0, startX: 0, movement: 0, movePosition: 0 }

  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;
    console.log(distX)
    console.log(this.slide.style.transform)
  }

  updatePosition(clientX) {
    this.dist.movement =( this.dist.startX - clientX) * 1.3;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let movetype;
    if(event.type === 'mousedown'){
      event.preventDefault();
      //Pegando a posição do mouse no eixo dos Xs
    this.dist.startX = event.clientX;
    movetype = 'mousemove';
    }else{
    this.dist.startX = event.changedTouches[0].clientX;
    movetype = 'touchmove';
    }
    this.wrapper.addEventListener(movetype, this.onMove);    
  }

  onMove(event) {
    const pointerPosition = (event.type === 'mousemove') ?  event.clientX : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }


  onEnd(event) {
    const pointerPosition = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';

    this.wrapper.removeEventListener('mousemove', this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);

  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}