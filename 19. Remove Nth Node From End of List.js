var removeNthFromEnd = function(head, n) {
    var target = head.length - n;
    head.splice(target,1);
    return head
};
removeNthFromEnd([1,2,3,4,5],2)//[1,2,3,5]
//把对链表的操作换成了对数组的操作