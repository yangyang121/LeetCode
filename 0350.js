/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const ans = [];
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const ant = map.get(nums1[i]) || 0;
    map.set(nums1[i], ant + 1);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i])) {
      const ant = map.get(nums2[i]);
      ans.push(nums2[i]);
      map.set(nums2[i], ant - 1);
    }
  }
  return ans;
};

intersect([1, 2, 2, 1], [2, 2]);
intersect([4, 9, 5], [9, 4, 9, 8, 4]);