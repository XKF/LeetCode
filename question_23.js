/*

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-k-sorted-lists

*/


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
var mergeKLists = function(lists) {
    let res = new ListNode(), head = res;
    lists = lists.filter(item=>{
        return item;
    })
    while(lists.length){
        let index = 0, min = lists[0].val;
        for(let i = 0;i < lists.length; i++){
            if(lists[i].val < min){
                min = lists[i].val;
                index = i;
            }
        }
        res.next = lists[index];
        res = res.next;
        if(lists[index].next){
            lists[index] = lists[index].next;
        }else{
            lists.splice(index,1);
        }
    }
    return head.next;
};



