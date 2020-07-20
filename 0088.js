// 如果 len1 剩下不需要处理，如果 len2 剩下则需要把剩下的加到 nums1 的最前面
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n - 1
  while (len1 >= 0 && len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length))
  }
  arrayCopy(nums2, 0, nums1, 0, len2 + 1)
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([0], 0, [1], 1)
merge([4,5,6], 1, [2,3], 2)
