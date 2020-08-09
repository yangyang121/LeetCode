// 第一次循环获取 nums[i] 左侧的乘积，第二次获取右侧的乘积
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];
  let k = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(k);
    k *= nums[i]; // 此时数组存储的是除去当前元素左边的元素乘积
  }
  k = 1;
  for (let i = res.length - 1; i >= 0; i--) {
    res[i] *= k; // k为该数右边的乘积
    k *= nums[i]; // 此时数组等于左边的 * 该数右边的
  }
  return res;
};

productExceptSelf([1, 2, 3, 4]);
