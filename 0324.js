/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b)
  const mid =
    nums.length % 2 === 0 ? nums.length / 2 : Math.ceil(nums.length / 2)
  const prev = nums.slice(0, mid).reverse()
  const next = nums.slice(mid).reverse()
  let i = 0
  let j = 0
  while (i < prev.length) {
    nums[j++] = prev[i]
    i < next.length && (nums[j++] = next[i])
    i++
  }
}
