// 倒序遍历 postorder ：记每个节点为 ri；
// 判断： 若 ri>root，说明此后序遍历序列不满足二叉搜索树定义，直接返回 false；
// 更新父节点 root ： 当栈不为空 且 ri<stack.peek() 时，循环执行出栈，并将出栈节点赋给 root 。
// 入栈： 将当前节点入栈；
function verifyPostorder(postorder) {
  const stack = []
  let root = Number.MAX_SAFE_INTEGER
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (root < postorder[i]) return false
    while (stack.length && stack[stack.length - 1] > postorder[i]) {
      root = stack.pop()
    }
    stack.push(postorder[i])
  }
  return true
}
