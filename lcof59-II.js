var MaxQueue = function () {
  this.queue = [];
  this.deque = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (!this.deque.length) return -1;
  return this.deque[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (this.deque.length && this.deque[this.deque.length - 1] < value) {
    this.deque.pop();
  }
  this.deque.push(value);
  this.queue.unshift(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (!this.queue.length) return -1;
  const ans = this.queue.pop();
  if (ans === this.deque[0]) {
    this.deque.shift();
  }
  return ans;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
