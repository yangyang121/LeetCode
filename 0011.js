// NOTE:谁短谁向内收（长的向内收 S 只会不变或者更小，短的向内收则 S 有可能变大） 
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let result = 0;
  while (i < j) {
    result =
      height[i] > height[j]
        ? Math.max(result, (j - i) * height[j--])
        : Math.max(result, (j - i) * height[i++]);
  }
  return result
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
