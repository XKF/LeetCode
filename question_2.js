/*

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

题目来源：力扣（LeetCode）
题目链接：https://leetcode-cn.com/problems/add-two-numbers

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let l3 , p  ,temp = 0, res;
    while(l1 != null || l2 !=null || temp){
        if(l1 != null){
            temp += ~~l1.val;
            l1 = l1.next;
        }
        if(l2 != null){
            temp += ~~l2.val;
            l2 = l2.next;
        }
        res = temp % 10; 
        if(!l3){
            l3 = new ListNode(res);
            p = l3;
        }else{
            p.next = new ListNode(res)
            p = p.next;
        }
        temp = temp > 9 ? 1: 0   
    }
    return l3;
};
