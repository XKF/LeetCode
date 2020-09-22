/*

94. 二叉树的中序遍历

给定一个二叉树，返回它的中序 遍历。

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = []
    if(root!==null && root[0]!==null){
        (function addTreeNode(arr,node){
            if(node.left){
                addTreeNode(arr,node.left);
                arr.push[node.left]
            }
            arr.push(node.val)
            if(node.right){
                addTreeNode(arr,node.right);
                arr.push[node.right]
            }
        }(arr,root))
    }
    return arr;
};

