/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let ans = 0
  function helper(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[i].length ||
      grid[i][j] === 0
    ) {
      return 0
    }
    grid[i][j] = 0
    let num = 1
    num += helper(i + 1, j)
    num += helper(i - 1, j)
    num += helper(i, j + 1)
    num += helper(i, j - 1)
    return num
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] === 1 && (ans = Math.max(ans, helper(i, j)))
    }
  }
  return ans
}
