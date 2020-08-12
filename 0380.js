/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.set = [];
  this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] !== undefined) return false;
  this.map[val] = this.set.length;
  this.set.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map[val] === undefined) return false;
  const lastIndex = this.set.length - 1;
  const lastNum = this.set[lastIndex];
  const deleteIndex = this.map[val];
  this.set[deleteIndex] = lastNum;
  this.map[lastNum] = deleteIndex;
  this.set.pop();
  delete this.map[val]
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const size = this.set.length;
  const random = Math.floor(Math.random() * size);
  return this.set[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
