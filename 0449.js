/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = [];
  function postOrder(root) {
    if (root) {
      postOrder(root.left);
      postOrder(root.right);
      res.push(root.val);
    }
  }
  postOrder(root);
  return res.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const nums = data.split(",").map((x) => Number(x));
  const helper = (lower, upper) => {
    if (nums.length === 0) return null;
    const val = nums[nums.length - 1];
    if (val < lower || val > upper) return null;
    nums.pop();
    const root = new TreeNode(val);
    root.right = helper(val, upper);
    root.left = helper(lower, val);
    return root;
  };
  return helper(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
