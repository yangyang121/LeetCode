/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  const length = arr.length
  if (k >= length) return arr

  function partition(start, end) {
    const k = arr[start]
    let left = start + 1
    let right = end
    while (1) {
      while (left <= end && arr[left] <= k) left++
      while (right >= start + 1 && arr[right] >= k) right--

      if (left >= right) {
        break
      }

      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      ++left
      --right
    }
    ;[arr[right], arr[start]] = [arr[start], arr[right]]
    return right
  }

  let left = 0
  let right = length - 1
  let index = partition(left, right)
  while (index !== k) {
    if (index < k) {
      left = index + 1
      index = partition(left, right)
    } else if (index > k) {
      right = index - 1
      index = partition(left, right)
    }
  }

  console.log(arr.slice(0, k))
  return arr.slice(0, k)
}

getLeastNumbers([3, 4, 5, 1, 2], 3)
