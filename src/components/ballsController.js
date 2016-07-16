export default class GameController {
  constructor(balls) {
    this.positions = [];
    this.defaultAcc = [];
    this.speed = [];
    this.naturalForce = {
      x: 0,
      y: 9.8
    };
    this.radiusArr = balls.map(d => d.radius);

    // Setup balls
    const { innerWidth } = window;
    const xOffset = (innerWidth - 300) > 0 ? (innerWidth - 300) / 2 : 0
    for (let i = 0; i < balls.length; i++) {
      this.positions.push({
        transX: xOffset + 30 * (i % 10),
        transY: 140 + Number.parseInt(i / 10) * 50
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

    // Change naturalForce basedon user device's state.
    window.addEventListener('devicemotion', (event) => {
      const { x, y } = event.accelerationIncludingGravity
      if (x !== null && x !== undefined && y !== null && y !== undefined) {
        this.naturalForce = { x, y };
      }
    })
  }

  update(fps) {
    // Pass the very first few seconds
    // Application is not stable during that time
    if (!fps || fps < 50) {
      return;
    }
    const { innerHeight: maxHeight, innerWidth: maxWidth } = window;

    this.positions = this.positions.map((d, i) => {
      //handle force
      const accX = this.defaultAcc[i].x + this.naturalForce.x;
      const accY = this.defaultAcc[i].y + this.naturalForce.y;

      const time = 1 / fps;
      this.speed[i].x += accX * 50 * time;
      this.speed[i].y += accY * 50 * time;

      d.transX = d.transX + time * this.speed[i].x;
      d.transY = d.transY + time * this.speed[i].y;

      //handle ball collide borders
      const radius = this.radiusArr[i]
      if (d.transX < radius) {
        d.transX = radius;
        this.speed[i].x = -this.speed[i].x;
      }
      if (d.transX > maxWidth - radius) {
        d.transX = maxWidth - radius;
        this.speed[i].x = -this.speed[i].x;
      }
      if (d.transY > maxHeight - radius) {
        d.transY = maxHeight - radius;
        this.speed[i].y = -this.speed[i].y;
      }
      if (d.transY < radius) {
        d.transY = radius;
        this.speed[i].y = -this.speed[i].y;
      }

      return d;
    });
  }
}
