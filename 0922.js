/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let j = 1;
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 !== 0) {
      while (A[j] % 2 !== 0) {
        j += 2;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return A;
};
