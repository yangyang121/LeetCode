/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 先首尾相连形成环，再把第k%n个node的next设置为null
 */
var rotateRight = function (head, k) {
  if (head === null || head.next === null) return head;
  let old_tail = head;
  let n = 1;
  while (old_tail.next !== null) {
    n++;
    old_tail = old_tail.next;
  }
  old_tail.next = head;
  let new_tail = head;
  for (let i = 0; i < n - (k % n) - 1; i++) {
    new_tail = new_tail.next;
  }
  const ans = new_tail.next;
  new_tail.next = null;
  return ans;
};
