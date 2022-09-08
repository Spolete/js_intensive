class Calculator {
  constructor(x, y) {
    if (arguments.length < 2 || !isFinite(x) || !isFinite(y)) throw new Error('Введите число');
    this.x = x;
    this.y = y;
  }

  setX(x) {
    if (arguments.length < 1 || !isFinite(x)) throw new Error('Введите число');
    this.x = x;
  };

  setY(y) {
    if (arguments.length < 1 || !isFinite(y)) throw new Error('Введите число');
    this.y = y;
  };

  logSum() {
    return this.x + this.y;
  };

  logMul() {
    return this.x * this.y;
  };

  logSub() {
    return this.x - this.y;
  };

  logDiv() {
    if (this.y === 0) throw new Error('Нельзя делить на ноль');
    return this.x / this.y;
  }
}
