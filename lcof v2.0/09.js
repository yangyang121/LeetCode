class CQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  appendTail(value) {
    this.stack1.push(value)
  }

  deleteHead() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    if (this.stack2.length) return this.stack2.pop()
    return -1
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
