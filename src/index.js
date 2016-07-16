import './styles/app.scss';

import Ball from './components/ball';
import GameController from './components/GameController';
import PerformanceCounter from './components/PerformanceCounter';

const FPSLabel = document.querySelector('#fps');
const counterComponent = new PerformanceCounter(FPSLabel);

const gameController = new GameController(10);

const context = document.querySelector('#app').getContext('2d');
const balls = [];
for (let i = 0; i < 10; i++) {
  balls.push(new Ball(context));
}

function update() {
  context.clearRect(0, 0, 500, 500)
  gameController.positions.forEach((d, i) => {
    balls[i].draw(d.transX, d.transY);
  });
  counterComponent.updateCounter()
  setTimeout(update, 0)
}

update();
