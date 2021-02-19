/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!Array.isArray(lists) || !lists.length) return null
  function merge(i, j) {
    if (i === j) return lists[i]
    const mid = (i + j) >> 1
    const l1 = merge(i, mid)
    const l2 = merge(mid + 1, j)
    return mergeTwo(l1, l2)
  }
  function mergeTwo(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    if (l1.val < l2.val) {
      l1.next = mergeTwo(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwo(l1, l2.next)
      return l2
    }
  }
  return merge(0, lists.length - 1)
}
