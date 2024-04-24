/** Node: node for a queue. 
 * 
 * ABSTRACT DATA TYPE (ADT): defines a data structure purely in terms of the operations 
 *    that can be performed on it, without specifying the details of HOW these operations
 *    are implemented. It instead focuses on WHAT operations are available and what they do.
 * 
 * WHY USE ADT?? 
 *    Ex: If in the future, implementation of a stack or queue is changed from an array 
 *    to a linked list, the client program will still work the same way without being affected
 * 
 * QUEUE - A data structure where elements are added at one end ("back")
 *    and removed from the other ("front"),
 * 
 * FIFO: FIRST IN, FIRST OUT
 *  - The first element added to structure is the first to be removed
 * 
 *    In Arrays, we would use push() for enqueue and shift() for dequeue,
 *    In linked lists, must directly manipulate first & last nodes to do this.
 * 
 *  - enqueue() adds a new val to end of queue, returns undefined
 *    O(1) time complexity, which is faster than array shift() 
 * 
 *  - dequeue() removes node from the start of queue and returns its value
 *    O(1) time complexity, which is faster than array shift() 
 * 
 *  - peek() returns but doesn't remove the top item
 *    O(1) time complexity, same as array method
 * 
 *  - isEmpty() checks if the stack is empty, returns a boolean
 *    O(1) time complexity, same as array method
 * 
 * 
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.last) { // Queue is empty
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // Link the new node to the end of the queue
      this.last = newNode; // Update the last node
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error("Cannot dequeue from an empty queue.");
    const removedValue = this.first.val;
    this.first = this.first.next; // Remove the first node
    if (!this.first) this.last = null; // Check if the queue is now empty
    this.size--;
    return removedValue;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) return null;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
