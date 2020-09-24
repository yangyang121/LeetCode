/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const sum = Array.from({ length: nums.length + 1 }).fill(0);
  nums.forEach((item, index) => {
    sum[index + 1] = sum[index] + item;
  });
  this.sum = sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sum[j + 1] - this.sum[i];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
