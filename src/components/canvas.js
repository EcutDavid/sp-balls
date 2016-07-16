export default class Canvas {
  constructor() {
    this.dom = document.querySelector('#app');
    setInterval(this.updateAttributes(), 500);
    this.context = this.dom.getContext('2d');

    // The reason why use interval instrad of event lisetner:
    //    The event lisetner gonna be called tons of times, for desktop
    ///   browser, need more code to handle that.
    setInterval(() => this.updateAttributes(), 500);
    this.updateAttributes();
  }

  updateAttributes() {
    const { dom } = this;

    const canvasWidth = dom.getAttribute('width');
    const canvasHeight = dom.getAttribute('height');

    const { innerHeight, innerWidth } = window;
    if (Number.parseInt(canvasWidth) === innerWidth &&
      Number.parseInt(canvasHeight) === innerHeight) {
      return;
    }
    dom.setAttribute('width', innerWidth);
    dom.setAttribute('height', innerHeight);
    this.width = innerWidth;
    this.height = innerHeight;
  }
}
