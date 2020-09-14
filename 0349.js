/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const ans = [];
  const map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i]) !== undefined) {
      ans.push(nums2[i]);
      map.set(nums2[i], undefined);
    }
  }
  console.log(ans);
  return ans;
};

intersection([1, 2, 2, 1], [2, 2]);
intersection([4, 9, 5], [9, 4, 9, 8, 4]);
