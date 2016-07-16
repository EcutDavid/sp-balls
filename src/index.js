import './styles/app.scss';

import Ball from './components/ball';
import GameController from './components/ballsController';
import PerformanceCounter from './components/performanceCounter';

const canvas = document.querySelector('#app');

const setCanvasAttributes = () => {
    const canvasWidth = canvas.getAttribute('width');
    const canvasHeight = canvas.getAttribute('height');

    const { innerHeight, innerWidth } = window;
    if (canvasWidth === innerWidth && canvasHeight === innerHeight) {
      return
    }
    canvas.setAttribute('width', innerWidth);
    canvas.setAttribute('height', innerHeight);
}
// setInterval(setCanvasAttributes, 500);
setCanvasAttributes()

const context = canvas.getContext('2d');

const balls = [];
for (let i = 0; i < 35; i++) {
  balls.push(new Ball(context));
}

const FPSLabel = document.querySelector('#fps');
const counterComponent = new PerformanceCounter(FPSLabel);

const ballsController = new GameController(balls);

function update() {
  context.clearRect(0, 0, innerWidth, innerHeight)
  ballsController.positions.forEach((d, i) => {
    balls[i].draw(d.transX, d.transY);
  });
  counterComponent.updateCounter();
  ballsController.update(counterComponent.fps);
  setTimeout(update, 0);
}

update();
