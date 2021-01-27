/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  const dummy = new Listnode(0)
  dummy.next = head
  let curr = dummy
  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val === curr.next.next.val) {
      let temp = curr.next
      while (
        temp !== null &&
        temp.next !== null &&
        temp.val === temp.next.val
      ) {
        temp = temp.next
      }
      curr.next = temp.next
    } else {
      curr = curr.next
    }
  }
  return dummy.next
}
