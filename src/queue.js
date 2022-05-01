const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.length = 0;
    this.data = null;
  }

  getUnderlyingList() {
    return this.data ? this.data : null;
  }

  enqueue(value) {
    this.length + 1;
    if (this.data) {
      let cur = this.data;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = new ListNode(value);
    } else {
      this.data = new ListNode(value);
    }
  }

  dequeue() {
    let newData = null;
    if (this.data) {
      newData = this.data;
      this.data = newData.next;
      this.length - 1;
      return newData.value;
    }
    return newData;
  }
}

module.exports = {
  Queue,
};
