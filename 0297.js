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
  const queue = [root]
  const ans = []
  while (queue.length) {
    const node = queue.shift()
    if (node) {
      ans.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      ans.push("X")
    }
  }
  return ans.join(",")
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === "X") return null
  const list = data.split(",")
  const root = new TreeNode(list[0])
  const queue = [root]
  let index = 1
  while (index < list.length) {
    const node = queue.shift()
    const leftVal = list[index]
    const rightVal = list[index + 1]
    if (leftVal !== "X") {
      const leftNode = new TreeNode(leftVal)
      queue.push(leftNode)
      node.left = leftNode
    }
    if (rightVal !== "X") {
      const rightNode = new TreeNode(rightVal)
      queue.push(rightNode)
      node.right = rightNode
    }
    index += 2
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
