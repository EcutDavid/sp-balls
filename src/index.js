import Ball from './components/ball';
import './styles/app.scss';

const context = document.querySelector('#app').getContext('2d');
const ball = new Ball(context);
ball.draw(110, 110);
