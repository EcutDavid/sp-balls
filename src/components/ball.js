import { generateRandomColor } from '../helpers/color';

export default class Ball {
  constructor(canvasCtx) {
    this.canvasCtx = canvasCtx;
    this.radius = Math.random() * 15 + 6;

    this.ball = {
      color: generateRandomColor(),
      strokeColor: generateRandomColor(),
      radius: this.radius,
      lineWidth: 2
    };

    const lightOpacity = 0.15
    this.light = {
      color: generateRandomColor(lightOpacity),
      strokeColor: generateRandomColor(lightOpacity),
      radius: this.radius * 4,
      lineWidth: 6
    };
  }

  drawBall({ color, strokeColor, radius, lineWidth }, transX = 0, transY = 0) {
    const { canvasCtx } = this;

    canvasCtx.beginPath();
    canvasCtx.fillStyle = color;
    canvasCtx.strokeStyle = strokeColor;
    canvasCtx.arc(transX, transY, radius, 0, 2 * Math.PI);
    canvasCtx.lineWidth = lineWidth;
    canvasCtx.fill();
    canvasCtx.stroke();
  }

  draw(transX, transY) {
    const {
      ball,
      light
    } = this;
    // Prevent this drawing method pollute context
    this.drawBall(light, transX, transY);
    this.drawBall(ball, transX, transY);
  }
}
