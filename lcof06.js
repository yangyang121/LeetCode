/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head === null) return [];
  const ans = [];
  let temp = head;
  while (temp) {
    ans.unshift(temp.val);
    temp = temp.next;
  }
  return ans;
};
