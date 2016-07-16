import './styles/app.scss';

import Ball from './components/ball';
import GameController from './components/ballsController';
import PerformanceCounter from './components/performanceCounter';

const canvas = document.querySelector('#app');
const { innerHeight, innerWidth } = window;
canvas.setAttribute('width', innerWidth);
canvas.setAttribute('height', innerHeight);
const context = canvas.getContext('2d');

const balls = [];
for (let i = 0; i < 10; i++) {
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
  ballsController.update(counterComponent.fps)
  setTimeout(update, 3);
}

update();
