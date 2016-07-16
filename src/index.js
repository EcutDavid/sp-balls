import './styles/app.scss';

import Ball from './components/ball';
import GameController from './components/ballsController';
import PerformanceCounter from './components/performanceCounter';
import Canvas from './components/canvas'

const canvas = new Canvas()
const { context } = canvas

const balls = [];
for (let i = 0; i < 20; i++) {
  balls.push(new Ball(context));
}

const counterComponent = new PerformanceCounter();

const ballsController = new GameController(balls);

function update() {
  const { width, height } = canvas
  context.clearRect(0, 0, width, height)
  ballsController.positions.forEach((d, i) => {
    balls[i].draw(d.transX, d.transY);
  });
  counterComponent.updateCounter();
  ballsController.update(counterComponent.fps);
  setTimeout(update, 0);
}

update();
