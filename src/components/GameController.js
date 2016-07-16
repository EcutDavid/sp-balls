export default class GameController {
  constructor(count) {
    this._positions = []
    for (let i = 0; i < count; i++) {
      this._positions.push({
        transX: 50 + 30 * i,
        transY: 100
      });
    }
  }

  get positions () { return this._positions }
}
