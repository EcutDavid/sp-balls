import { generateRandomColor } from '../helpers/color';

export default class Ball {
  constructor(canvasCtx) {
    this.canvasCtx = canvasCtx;
    const ballSize = Math.random() * 20 + 10;

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

  drawBall({ color, strokeColor, size, lineWidth }, xTrans = 0, yTrans = 0) {
    const { canvasCtx } = this

    canvasCtx.beginPath();
    canvasCtx.fillStyle = color
    canvasCtx.strokeStyle = strokeColor
    canvasCtx.arc(xTrans, yTrans, size, 0, 2 * Math.PI)
    canvasCtx.lineWidth = lineWidth
    canvasCtx.fill()
    canvasCtx.stroke()
  }

  draw(xTrans, yTrans) {
    const {
      canvasCtx,
      ball,
      light
    } = this
    // Prevent this drawing method pollute context
    canvasCtx.save();

    this.drawBall(light, xTrans, yTrans);
    this.drawBall(ball, xTrans, yTrans);

    canvasCtx.restore();
  }
}
