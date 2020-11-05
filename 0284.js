/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.peekElement = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.peekElement === null) {
    return (this.peekElement = this.iterator.next());
  }
  return this.peekElement;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.peekElement === null) {
    return this.iterator.next();
  }
  const nextElement = this.peekElement;
  this.peekElement = null;
  return nextElement;
};

/**
 * @return {boolean}
 * 即使 hasNext() 返回的是false，但是由于 this.peekElement !== null，所以还是可以继续掉 next 方法
 */
PeekingIterator.prototype.hasNext = function () {
  return his.iterator.hasNext() || this.peekElement !== null;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
