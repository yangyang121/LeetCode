function findContinuousSequence(target) {
  const ans = []
  let i = 1
  let j = 1
  let sum = 0
  while (i <= target >> 1) {
    if (sum < target) {
      sum += j
      j++
    } else if (sum > target) {
      sum -= i
      i++
    } else {
      const sub = []
      for (let k = i; k < j; k++) {
        sub.push(k)
      }
      ans.push(sub)
      sum -= i
      i++
    }
  }
  return ans
}
