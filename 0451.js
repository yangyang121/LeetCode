/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  if (s.length < 3) return s
  function partition(l, r) {
    const pivot = Math.floor(Math.random() * (r - l)) + l
    ;[arr[pivot], arr[r]] = [arr[r], arr[pivot]]
    const x = arr[r]
    let i = l - 1
    for (let j = l; j < r; j++) {
      if (arr[j][1] >= x[1]) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
    i++
    ;[arr[i], arr[r]] = [arr[r], arr[i]]
    return i
  }
  function quickSort(l = 0, r) {
    r = typeof r !== "number" ? arr.length - 1 : r
    if (l < r) {
      const index = partition(l, r)
      quickSort(index + 1, r)
      quickSort(l, index - 1)
    }
  }
  let ans = ""
  const map = new Map()
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  const arr = []
  for (let [key, value] of map) {
    arr.push([key, value])
  }
  quickSort()
  for (let [c, n] of arr) {
    ans += Array.from({ length: n }).fill(c).join("")
  }
  console.log(ans)
  return ans
}
frequencySort("tree")
frequencySort("cccaaa")
frequencySort("Aabb")
frequencySort("abcdefgbcd")
