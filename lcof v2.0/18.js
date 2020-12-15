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

function deleteNode(head, val) {
  if (head === null) return head
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let temp = dummyHead
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
      break
    }
    temp = temp.next
  }
  return dummyHead.next
}
