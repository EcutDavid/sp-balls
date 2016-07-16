export default class PerformanceCounter {
  constructor() {
    this.dom = document.querySelector('#fps');
    this.timeBeforeCalc = performance.now();
    this.counter = 0;
    setInterval(() => this.updateFPS(), 500);
  }

  updateCounter() {
    this.counter++;
    this.timeWhenUpdate = performance.now();
  }

  updateFPS() {
    if (!this.timeWhenUpdate) {
      this.timeWhenUpdate = performance.now();
      return;
    }
    const time = (this.timeWhenUpdate - this.timeBeforeCalc) / this.counter;
    this.fps = (1000 / time).toFixed(2);
    this.timeBeforeCalc = performance.now();
    this.counter = 0;

    this.dom.innerHTML = `FPS: ${this.fps}`;
  }
}
