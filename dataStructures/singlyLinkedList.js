class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      // first node. Head and tail points to that node.
      this.head = newNode;
      this.tail = this.head;
    } else {
      //Previously Last node NEXT property points to new node
      this.tail.next = newNode;

      // newNode is last. Moving tail to point last new node.
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      // one before end
      newTail = current;
      // last
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // remove first item
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return temp;
  }
  // add value at beginning
  unshift(val) {
    let newNode = new Node(val);

    // if list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('from');
list.push('me');
list.unshift('first.');
list.push('last of the list.');

console.log(list.get(4));
