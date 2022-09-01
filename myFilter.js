Array.prototype.myFilter = function (callback, thisArg) {
  if (this === null || this === undefined) throw TypeError('Array.prototype.filter called on null or undefined');
  if (typeof callback !== 'function') throw TypeError(`${callback} is not a function`);

  const result = [];
  const withoutEmpty = Object.entries(this)

  for (let i = 0; i < withoutEmpty.length; i++) {
    const [index, value] = withoutEmpty[i]
    if (callback.call(thisArg, value, Number(index), this)) result.push(value)
  }

  return result;
};
