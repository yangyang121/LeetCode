/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1, l2) {
  const dummyHead = new ListNode(0)
  let temp = dummyHead
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      temp.next = new ListNode(l2.val)
      l2 = l2.next
    }
    temp = temp.next
  }
  if (l1) {
    temp.next = l1
  } else {
    temp.next = l2
  }
  return dummyHead.next
}
