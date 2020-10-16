/*

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例：

输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses

*/

/**
 * @param {number} n
 * @return {string[]}
 * 参照其他网友答案思路
 */
var generateParenthesis = function(n) {
    const res = []; // 解集

    const generate = (str, left, right) => {
        if (str.length == 2 * n) { // 构建后的总长度
            res.push(str);
            return;
        }
        if (left > 0) {         // 只要左括号有剩，可以选它，继续递归做选择
            generate(str + '(', left - 1, right);
        }
        if (right > left) {     // 右括号的保有数量大于左括号的保有数量，才能选右括号
            generate(str + ')', left, right - 1);
        }
    };

    generate('', n, n); // 递归的入口，初始字符串是空字符串，初始括号数量都是n
    return res;
};




