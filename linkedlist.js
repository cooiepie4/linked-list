class linkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    this.head = new node(value, this.head);
  }

  tail() {
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current.value;
  }

  head() {
    return this.head ? this.head.value : null;
  }

  size() {
    if (!this.head) {
      return null;
    }
    let count = 1;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      count++;
    }
    return count;
  }

  at(index) {
    if (!this.head) {
      return null;
    }
    let i = 1;
    let current = this.head;
    while (current.nextNode && i <= index) {
      current = current.nextNode;
      i++;
    }
    return current.value;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }
  contains(value) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
      if (current.value === value) {
        return current.value;
      }
    }
  }
  toString() {
    if (!this.head) {
      return null;
    }
    let string = "";
    let current = this.head;
    string += "(" + current.value + ")" + "->";
    while (current.nextNode) {
      current = current.nextNode;
      string += "(" + current.value + ")" + "->";
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
    const newNode = new node(value);

    // Case 1: Inserting at the beginning (index 0)
    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    // Case 2: Inserting at any other position
    let i = 0;
    let current = this.head;
    let previous = null;

    while (current !== null && i < index) {
      previous = current;
      current = current.nextNode;
      i++;
    }

    // If index is out of bounds, insert at the end
    if (current === null && i < index) {
      previous.nextNode = newNode;
    } else {
      newNode.nextNode = current;
      previous.nextNode = newNode;
    }
  }
}

class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.insertAt("coog", 3);
list.pop();
console.log(list.toString());
console.log(list.size());
console.log(list.at(4));
console.log(list.tail());
