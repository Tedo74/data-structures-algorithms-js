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
    return current;
  }
}

let list = new SinglyLinkedList();
list.push('hi');
list.push('from');
list.push('me');

list.traverse();
console.log(list.pop());

// console.log(list);
// let a = new Node(1);
// let b = new Node(2);
// a.next = b;
// let c = new Node(3);
// a.next.next = c;
// console.log(a);
// console.log(a.next);
// console.log(a.next.next);
