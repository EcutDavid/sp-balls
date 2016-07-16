import { generateRandomColor } from '../helpers/color';

export default class Ball {
  constructor(canvasCtx) {
    this.canvasCtx = canvasCtx;
    const ballSize = Math.random() * 15 + 6;

    this.ball = {
      color: generateRandomColor(),
      strokeColor: generateRandomColor(),
      size: ballSize,
      lineWidth: 2
    };

    const lightOpacity = 0.15
    this.light = {
      color: generateRandomColor(lightOpacity),
      strokeColor: generateRandomColor(lightOpacity),
      size: ballSize * 4,
      lineWidth: 6
    };
  }

  drawBall({ color, strokeColor, size, lineWidth }, transX = 0, transY = 0) {
    const { canvasCtx } = this

    canvasCtx.beginPath();
    canvasCtx.fillStyle = color
    canvasCtx.strokeStyle = strokeColor
    canvasCtx.arc(transX, transY, size, 0, 2 * Math.PI)
    canvasCtx.lineWidth = lineWidth
    canvasCtx.fill()
    canvasCtx.stroke()
  }

  draw(transX, transY) {
    const {
      canvasCtx,
      ball,
      light
    } = this
    // Prevent this drawing method pollute context
    canvasCtx.save();

    this.drawBall(light, transX, transY);
    this.drawBall(ball, transX, transY);

    canvasCtx.restore();
  }
}
