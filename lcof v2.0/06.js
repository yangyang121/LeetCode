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

function reversePrint(head) {
  if (head === null) return []
  let temp = head
  const ans = []
  while (head) {
    ans.unshift(temp.val)
    temp = temp.next
  }
  return ans
}
