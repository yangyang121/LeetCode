/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  function partition(l, r) {
    const x = arr[r]
    let i = l - 1
    for (let j = l; j < r; j++) {
      if (arr[j][1] <= x[1]) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    i++
    ;[arr[i], arr[r]] = [arr[r], arr[i]]
    return i
  }
  function randomPartition(l, r) {
    const i = Math.floor(Math.random() * (r - l)) + l
    ;[arr[i], arr[r]] = [arr[r], arr[i]]
    return partition(l, r)
  }
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    map.set(n, map.has(n) ? map.get(n) + 1 : 1)
  }
  const arr = []
  for (let [key, value] of map) {
    arr.push([key, value])
  }
  let l = 0
  let r = arr.length - 1
  k = arr.length - k
  let index = randomPartition(l, r)
  while (index !== k) {
    if (k > index) {
      l = index + 1
    } else {
      r = index - 1
    }
    index = randomPartition(l, r)
  }
  const ans = []
  for (let i = k; i < arr.length; i++) {
    ans.push(arr[i][0])
  }
  console.log(arr, ans)
  return ans
}

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)
