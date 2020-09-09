/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.minStack.length) {
    const top = this.minStack[this.minStack.length - 1];
    if (x <= top) this.minStack.push(x);
  } else {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (!this.stack.length) return;
  const popItem = this.stack.pop();
  if (popItem === this.getMin()) this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.stack.length) return;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (!this.minStack.length) return;
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
