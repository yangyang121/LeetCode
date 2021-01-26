/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const arr = new Array(100).fill(0)
  let ans = 0
  for (let domino of dominoes) {
    const val =
      domino[0] > domino[1]
        ? domino[0] * 10 + domino[1]
        : domino[1] * 10 + domino[0]
    ans += arr[val]
    arr[val]++
  }
  return ans
}
