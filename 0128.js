/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const s = new Set()
  for (let n of nums) s.add(n)
  let ans = 0
  for (let n of nums) {
    if (!s.has(n - 1)) {
      let curr = n
      let cnt = 1
      while (s.has(curr + 1)) {
        curr++
        cnt++
      }
      ans = Math.max(ans, cnt)
    }
  }
  return ans
}
