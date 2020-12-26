/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length
  // let down = 1;
  // let up = 1;
  const down = [1]
  const up = [1]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // up = down + 1;
      up.push(down[down.length - 1] + 1)
    } else if (nums[i] < nums[i - 1]) {
      // down = up + 1;
      down.push(up[up.length - 1] + 1)
    }
  }
  console.log(up, down)
  return Math.max(up[up.length - 1], down[down.length - 1])
}

// wiggleMaxLength([1, 7, 4, 9, 2, 5])
wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])
