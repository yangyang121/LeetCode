class MaxQueue {
  constructor() {
    this.data = []
    this.max = []
  }

  max_value() {
    if (!this.data.length) return -1
    return this.max[0]
  }

  push_back(value) {
    while (this.max.length && value > this.max[this.max.length - 1]) {
      this.max.pop()
    }
    this.data.push(value)
    this.max.push(value)
  }

  pop_front() {
    if (!this.data.length) return -1
    const ans = this.data.shift()
    if (ans === this.max[0]) this.max.shift()
    return ans
  }
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
