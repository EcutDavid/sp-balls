export default class PerformanceCounter {
  constructor(dom) {
    this.dom = dom;
    this.timeBeforeCalc = performance.now();
    this.counter = 0;
    this.timeWhenUpdate = performance.now();
    setInterval(() => this.updateFPS(), 500);
  }

  updateCounter() {
    this.counter++;
    this.timeWhenUpdate = performance.now();
  }

  updateFPS() {
    const time = (this.timeWhenUpdate - this.timeBeforeCalc) / this.counter;
    const FPS = (1000 / time).toFixed(2);
    this.timeBeforeCalc = performance.now();
    this.counter = 0;

    this.dom.innerHTML = `FPS: ${FPS}`;
  }
}
