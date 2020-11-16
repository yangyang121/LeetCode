/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  const stack = [];
  let root = Number.MAX_SAFE_INTEGER;
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (postorder[i] > root) return false;
    while (stack.length && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop();
    }
    stack.push(postorder[i]);
  }
  return true;
};
