export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);


  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener('mousemove', this.onMove);
    console.log('onStart');
  }

  onMove(event) {
    console.log('onMove!')
  }

  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
    console.log('onEnd!')
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);

  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
}