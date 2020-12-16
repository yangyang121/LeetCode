class MinStack {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(x) {
    this.stack1.push(x)
    if (!this.stack2.length || this.stack2[this.stack2.length - 1] >= x) {
      this.stack2.push(x)
    }
  }

  pop() {
    if (this.stack1.pop() === this.stack2[this.stack2.length - 1]) {
      this.stack2.pop()
    }
  }

  top() {
    return this.stack1[this.stack1.length - 1]
  }

  min() {
    return this.stack2[this.stack2.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
