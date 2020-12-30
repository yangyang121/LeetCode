/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let i = 0
  let j = height.length - 1
  let left = 0
  let right = 0
  let ans = 0
  while (i < j) {
    if (height[i] < height[j]) {
      if (height[i] > left) {
        left = height[i]
      } else {
        ans += left - height[i]
      }
      i++
    } else {
      if (height[j] > right) {
        right = height[j]
      } else {
        ans += right - height[j]
      }
      j--
    }
  }
  return ans
}
