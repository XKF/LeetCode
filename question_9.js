/*

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-number

*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('')
};


/*


进阶：
你能不将整数转为字符串来解决这个问题吗？

var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }
    let originNum = x;
    let reNum = 0;
    
    while(originNum != 0) {
        reNum *= 10;
        reNum += originNum % 10;
        originNum = parseInt(originNum / 10);
    }
    return x == reNum;
};


*/