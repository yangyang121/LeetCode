function maxSlidingWindow(nums, k) {
  const ans = []
  const deque = []

  for (let i = 1 - k, j = 0; j < nums.length; i++, j++) {
    if (i >= 0 && nums[i - 1] === deque[0]) {
      deque.shift()
    }

    while (deque.length && nums[j] > deque[deque.length - 1]) {
      deque.pop()
    }
    deque.push(nums[j])
    if (i >= 0) {
      ans.push(deque[0])
    }
  }

  return ans
}
