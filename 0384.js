/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.original = nums.slice()
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.original.slice()
  return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.nums.length; i++) {
    const j = this.random(i, this.nums.length)
    ;[this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]]
  }
  return this.nums
}

Solution.prototype.random = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
