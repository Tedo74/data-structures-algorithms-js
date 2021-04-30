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

  // add item to be first in list (head)
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    if (index <= this.length / 2) {
      let count = 0;
      while (index != count) {
        current = current.next;
        count++;
      }
      console.log('left');
    } else {
      current = this.tail;
      let count = this.length - 1;
      while (index < count) {
        current = current.prev;
        count--;
      }
      console.log('right');
    }

    return current;
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
// console.log(list.push(1));
// console.log(list.push(2));
// console.log(list.push(3));
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
console.log(list.get(4));
// // list.shift();
// console.log('shifted ---->', list.shift());
// console.log('shifted ---->', list.shift());
// console.log('shifted ---->', list.shift());
// console.log('shifted ---->', list.shift());
// list.shift();
// list.shift();
// console.log('************************');
// console.log(list.unshift('new unshifted value here.'));
// list.traverse();
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log('************************');
// console.log(list);
