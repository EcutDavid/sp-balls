export default class GameController {
  constructor(balls) {
    this.positions = [];
    this.defaultAcc = [];
    this.speed = [];
    this.naturalForce = {
      x: 0,
      y: 9.8
    };

    for (let i = 0; i < balls.length; i++) {
      this.positions.push({
        transX: 50 + 30 * i,
        transY: 100
      });
      this.defaultAcc.push({
        x: (Math.random() - 0.5 ) * 10.0,
        y: (Math.random() - 0.5 ) * 10.0
      });
      this.speed.push({
        x: 0,
        y: 0
      });
    }
  }

  update(fps) {
    if (!fps || fps < 50) {
      return;
    }

    this.positions = this.positions.map((d, i) => {
      const accX = this.defaultAcc[i].x + this.naturalForce.x;
      const accY = this.defaultAcc[i].y + this.naturalForce.y;

      const time = 1 / fps
      this.speed[i].x = this.speed[i].x + accX * 50 * time
      this.speed[i].y = this.speed[i].y + accY * 50 * time

      d.transX = d.transX + time * this.speed[i].x
      d.transY = d.transY + time * this.speed[i].y
      return d
    })
  }
}
