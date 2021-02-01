/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 *    sumA - x + y = sumB + x - y
 * => x = y + ( sumA - sumB ) / 2
 */
var fairCandySwap = function (A, B) {
  const sumA = A.reduce((prev, next) => prev + next, 0)
  const sumB = B.reduce((prev, next) => prev + next, 0)
  const delta = Math.floor((sumA - sumB) / 2)
  const set = new Set(A)
  let ans = []
  for (let y of B) {
    const x = y + delta
    if (set.has(x)) {
      ans = [x, y]
      break
    }
  }
  return ans
}
