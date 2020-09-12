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
  let p1 = l1;
  let p2 = l2;
  const ans = new ListNode(0);
  let curr = ans;
  let n = 0;
  while (p1 !== null || p2 !== null) {
    const sum = (p1 === null ? 0 : p1.val) + (p2 === null ? 0 : p2.val) + n;
    n = sum >= 10 ? 1 : 0;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }
  if (n > 0) {
    curr.next = new ListNode(n);
  }
  return ans.next;
};
