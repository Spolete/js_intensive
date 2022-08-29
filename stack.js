class Stack {
  constructor() {
    this._stack = [];
  }

  push(el) {
    this._stack.push(el);
  }

  pop() {
    if (this._stack.length === 0) return "Stack is empty";
    this._stack.pop();
  }

  peek() {
    if (this._stack.length === 0) return "Stack is empty";
    return this._stack[this._stack.length - 1];
  }

  length() {
    return this._stack.length;
  }
}