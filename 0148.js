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
 * https://leetcode-cn.com/problems/sort-list/solution/148-pai-xu-lian-biao-bottom-to-up-o1-kong-jian-by-/
 */
var sortList = function (head) {
  function cut(head, n) {
    if (n <= 0) return head
    let p = head
    while (--n > 0 && p !== null) {
      p = p.next
    }
    if (p === null) return null
    const next = p.next
    p.next = null
    return next
  }
  function merge(list1, list2) {
    const dummyHead = new ListNode(0)
    let p = dummyHead
    while (list1 !== null && list2 !== null) {
      if (list1.val > list2.val) {
        p.next = list2
        list2 = list2.next
      } else {
        p.next = list1
        list1 = list1.next
      }
      p = p.next
    }
    if (list1 === null) {
      p.next = list2
    } else {
      p.next = list1
    }
    return dummyHead.next
  }
  if (head === null) return null
  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let p = head
  let len = 0
  while (p !== null) {
    len++
    p = p.next
  }

  for (let size = 1; size < len; size <<= 1) {
    let curr = dummyHead.next
    let tail = dummyHead
    while (curr !== null) {
      let left = curr
      let right = cut(curr, size)
      curr = cut(right, size)
      tail.next = merge(left, right)
      while (tail.next !== null) {
        tail = tail.next
      }
    }
  }
  return dummyHead.next
}
