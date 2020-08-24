/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildBST = (nums, left, right) => {
    if (left > right) return null;
    const mid = (left + right) >>> 1;
    const node = new TreeNode(nums[mid]);
    node.left = buildBST(nums, left, mid - 1);
    node.right = buildBST(nums, mid + 1, right);
    return node;
  };
  return buildBST(nums, 0, nums.length - 1);
};
