/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
  this.map = new Map()
}

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.map.set(number, (this.map.get(number) || 0) + 1)
}

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  for (let [k, v] of this.map) {
    const element = value - k
    if (element === k) {
      if (v > 1) return true
    } else {
      if (this.map.has(element)) return true
    }
  }
  return false
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
