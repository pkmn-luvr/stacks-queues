/** Node: node for a stack. 
 * 
 * STACK - Consists of elements of the same type arranged in sequential order
 * 
 * Stacks can be implemented using arrays or linked lists
 * 
 * If in the future, implementation of a stack is changed from an array to linked list, 
 * the client program will still work the same way without being affected
 * 
 * LIFO: LAST IN, FIRST OUT
 *  - The last element added to the stack is the first to be removed; 
 *     ensures that the most recently added element is always accessible!
 * 
 *  - push(val) adds new value to the top of the stack, returns undefined.
 *    O(1) time complexity since it only involves adjusting a few pointers
 * 
 *  - pop() removes the node from the top of the stack and returns its value
 *    O(1) time complexity since only removing the top element 
 * 
 *  - peek() returns the value of the first node/top element in the stack W/O removing it
 *    O(1) time complexity since accessing the top element does not involve any iteration/operations
 * 
 *  - isEmpty() checks if the stack is empty, returns a boolean 
 *    O(1) time complexity since it's a direct comparison operation
 * 
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return undefined;
  }


  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {

    if (!this.first) throw new Error("Stack is empty");
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    if (!this.first) {
      this.last = null;
    }
    return temp.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (!this.first) return null;
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
