/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const ans = [];
  const map = new Map();
  const stack = [];
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
  }
  while (stack.length) {
    map.set(stack.pop(), -1);
  }
  for (let i = 0; i < nums1.length; i++) {
    ans.push(map.get(nums1[i]));
  }
  console.log(ans);
  return ans;
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
nextGreaterElement([2, 4], [1, 2, 3, 4]);
