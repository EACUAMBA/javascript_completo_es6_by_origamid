import debounce from './debounce.js';

export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);

    this.dist = { finalPosition: 0, startX: 0, movement: 0, movePosition: 0 }

    this.activeClass = 'active';

  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this));
  }

  //slide config
  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slideConfig() {
    this.slideArray = [...this.slide.children].map((item) => {
      const position = this.slidePosition(item);
      return { position, item };
    });
    return this.slideArray;
  }

  changeSlide(index) {

    const activeSlide = this.slideArray[index];
    this.slideIndexNav(index);
    this.moveSlide(this.slideArray[index].position)
    this.dist.finalPosition = activeSlide.position;
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: !index ? undefined : index - 1,
      active: index,
      next: index == last ? undefined : index + 1
    }
    console.log(this.index);
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;
    console.log(distX)
    console.log(this.slide.style.transform)
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.3;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    this.transition(false);
    let movetype;
    if (event.type === 'mousedown') {
      event.preventDefault();
      //Pegando a posição do mouse no eixo dos Xs
      this.dist.startX = event.clientX;
      movetype = 'mousemove';
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      movetype = 'touchmove';
    }
    this.wrapper.addEventListener(movetype, this.onMove);
  }

  onMove(event) {
    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }


  onEnd(event) {
    const pointerPosition = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';

    this.wrapper.removeEventListener('mousemove', this.onMove);
    this.dist.finalPosition = this.dist.movePosition;

    this.transition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined)
      this.activeNextSlide();
    else if (this.dist.movement < 120 && this.index.prev !== undefined)
      this.activePrevSlide();
    else {
      this.changeSlide(this.index.active);
    }
    this.changeActiveClass();

  }

  addSlideEvents() {
    this.addResizeEvent();
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);

  }

  changeActiveClass() {
    this.slideArray.forEach(({ position, item }) => {
      item.classList.remove(this.activeClass);
    })
    this.slideArray[this.index.active].item.classList.add(this.activeClass)
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onResize() {
    setTimeout(() => {
      this.slideConfig();
      this.changeSlide(this.index.active);
    }, 100);

  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  init() {
    this.bindEvents();
    this.addSlideEvents();
    this.slideConfig();
    this.changeSlide(0);
    this.transition(true);
    return this;
  }
}