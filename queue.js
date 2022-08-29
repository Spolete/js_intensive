class Node {
  constructor(value) {
    this.value = value
    this.next = null

  }
}

class Queue {
  constructor() {
    this.head = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(el) {
    const node = new Node(el)

    if (this.head) {
      this.back.next = node;
      this.back = node;
    } else {
      this.head = node;
      this.back = node;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) return null
    const current = this.head;

    if (this.head === this.back) {
      this.back = null;
      this.head = null;
    } else {
      this.head = this.head.next
    }

    this.length--
    return current.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  front() {
    if (!this.head) return null
    return this.head.value;
  }

  size() {
    return this.length;
  }
}

