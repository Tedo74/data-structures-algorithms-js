class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // if list is empty
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let itemToReturn = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.length--;
    itemToReturn.prev = null;
    return itemToReturn;
  }
  // remove first item
  shift() {
    // if list is empty
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = oldHead.next;
      this.head = newHead;
    }
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
console.log(list.push(1));
console.log(list.push(2));
console.log(list.push(3));
// list.shift();
console.log('shifted ---->', list.shift());
console.log('shifted ---->', list.shift());
console.log('shifted ---->', list.shift());
console.log('shifted ---->', list.shift());
// list.shift();
// list.shift();
console.log('************************');
list.traverse();
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log('************************');
// console.log(list);
