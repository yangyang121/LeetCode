/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = [];
  const stack2 = [];
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let next = null;
  let cnt = 0;
  while (stack1.length !== 0 || stack2.length !== 0 || cnt !== 0) {
    let val1 = 0;
    let val2 = 0;
    if (stack1.length !== 0) {
      val1 = stack1.pop();
    }
    if (stack2.length !== 0) {
      val2 = stack2.pop();
    }
    const sum = val1 + val2 + cnt;
    const newNode = new ListNode(sum % 10);
    cnt = Math.floor(sum / 10);
    newNode.next = next;
    next = newNode;
  }
  return next;
};
