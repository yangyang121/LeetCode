function majorityElement(nums) {
  let ans = nums[0]
  let count = 0
  for (let n of nums) {
    if (ans === n) {
      count++
    } else {
      if (count === 0) {
        count = 1
        ans = n
      } else {
        count--
      }
    }
  }
  return ans
}
