/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  const n = arr.length
  const up = new Array(n).fill(1)
  const down = new Array(n).fill(1)
  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      up[i] = down[i - 1] + 1
    } else if (arr[i] < arr[i - 1]) {
      down[i] = up[i - 1] + 1
    }
  }
  return Math.max.apply(null, up.concat(down))
}
