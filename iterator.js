const myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function () {
  if (this.from > this.to) throw Error('from should be less than to')
  if (!isFinite(this.from) || !isFinite(this.to)) throw Error('from and to should be number')

  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return {value: this.current++, done: false}
      } else {
        return {done: true}
      }
    }
  }
}