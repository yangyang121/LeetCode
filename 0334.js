/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false
  let small = Number.MAX_SAFE_INTEGER
  let mid = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (n <= small) {
      small = n
    } else if (n <= mid) {
      mid = n
    } else if (n > mid) {
      return true
    }
  }
  return false
}
