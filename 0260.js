/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const m = new Map()
  const ans = []
  for (let n of nums) {
    m.set(n, (m.get(n) || 0) + 1)
  }
  for (let [k, v] of m) {
    if (v === 1) ans.push(k)
  }
  return ans
}
