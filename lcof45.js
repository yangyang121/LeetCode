/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    const x = a + "" + b;
    const y = b + "" + a;
    return Number(x) - Number(y);
  });
  return nums.join("");
};

minNumber([3, 30, 34, 5, 9]);
