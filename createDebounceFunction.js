const createDebounceFunction = (callback, wait) => {
  let timerId = null;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), wait)
  }
}