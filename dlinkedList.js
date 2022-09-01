class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  head() {
    return this.front;
  }

  tail() {
    return this.back;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode
      this.back = newNode;
    } else {
      this.back.next = newNode;
      newNode.prev = this.back;
      this.back = newNode;
    }
    this.length++;
  }

  remove() {
    if (!this.front) {
      return null;
    }
    const removedNode = this.tail();

    if (this.size() === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail().prev;
      this.tail.next = null;
    }
    this.length--;

    return removedNode;
  }

  indexOf(value) {
    let currentNode = this.head();
    let position = 0;

    while (position < this.size()) {
      if (currentNode.value === value) {
        return position
      }
      currentNode = currentNode.next;
      position++;
    }

    return 'Значение отсутствует';
  }

  elementAt(index) {
    if (!this.front || index > this.size() - 1) {
      return null;
    }

    let node = this.head();
    let position = 0;

    while (position < index) {
      node = node.next;
      position++;
    }

    return node;
  }

  addFirst(value) {
    if (!this.front) {
      this.add(value);
    } else {
      const newNode = new Node(value);

      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;

      this.length++;
    }
  }

  addAt(index, value) {
    let current = this.head();
    const newNode = new Node(value);
    let position = 0;

    if (index < 0 || index > this.size() - 1) {
      return null;
    }

    if (index === 0) {
      this.addFirst(value);
    }

    while (position < index) {
      current = current.next;
      position++;
    }

    current.prev.next = newNode;
    newNode.prev = current.prev;
    current.prev = newNode;
    newNode.next = current;

    this.length++;
  }

  removeFirst() {
    if (!this.front) {
      return null;
    }
    let removedNode;

    if (this.size() === 1) {
      removedNode = this.remove();
    } else {
      removedNode = this.head();
      this.front = this.front.next;
      this.front.prev = null;
      this.length--;
    }

    return removedNode;
  }


  removeAt(index) {
    const removedNode = this.elementAt(index);

    if (index < 0 || index > this.size() - 1) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this.size() - 1) {
      return this.remove();
    }

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}