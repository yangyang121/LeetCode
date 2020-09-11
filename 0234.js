/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 常规思路：转换成数组然后判断是否是回文数组，但空间复杂度为O(n)
 * 思路：现根据快慢指针找到中间点，反转后半部分，比较两部分，若结果为true再把后半部分反转回来
 */
var isPalindrome = function (head) {
  function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  function endOfFirstHalf(head) {
    let slow = head;
    let fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  if (head === null) return true;
  let firstHalfEnd = endOfFirstHalf(head);
  let secondHalfStart = reverseList(firstHalfEnd.next);
  let p1 = head;
  let p2 = secondHalfStart;
  while (p2 !== null) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEnd.next = reverseList(secondHalfStart);
  return true;
};
