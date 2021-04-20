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

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

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
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    let prevNode = this.get(index - 1);
    let nextForNewNode = prevNode.next;
    let newNode = new Node(value);
    prevNode.next = newNode;
    newNode.next = nextForNewNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let prev = this.get(index - 1);
    let nodeToDelete = prev.next;
    let tempNext = nodeToDelete.next;
    prev.next = tempNext;
    this.length--;
    return nodeToDelete;
  }

  reverse() {
    //  swap tail and head
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    // reverse other items
    let next;
    let prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
  reverseTwo() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    // at first step current points to old head, wich now is this.TAIL
    let temp = null;
    let latest = null;

    for (let i = 0; i < this.length; i++) {
      //at first step current.next points to old this.HEAD.next /second element/
      temp = current.next;
      // at first step current===this.tail this.tail.next = null/latest is null/
      current.next = latest;
      latest = current;
      //at first step, now current = points to second element
      current = temp;
    }
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.unshift('first');
list.push(4);
// list.set(4, 'last');
// console.log(`remove ${0} element-----> `, list.remove(0));

// console.log('insert:---> ', list.insert(3, 'INSERTED'));
// console.log('insert:---> ', list.insert(9, 'INSERTED'));

list.traverse();
// // list.remove(2);
// // console.log(`remove ${2} element-----> `, list.remove(2));
list.reverse();
console.log('***************!!!!!!!!!!!!!!*****************');

list.traverse();
