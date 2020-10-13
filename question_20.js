/*

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if(/\(|\[|\{/.test(s[i])){
            arr.push(s[i])
        }else if(/\(\)|\[\]|\{\}/.test(`${arr[arr.length-1]}${s[i]}`)){
            arr.pop()
        }else{
            return false;
        }
    }
    return !arr.length;
};


