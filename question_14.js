/*


编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix


*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return ''
    }else{
        let i = 0;
        while(i < strs[0].length){
            for(let j = 1 ; j < strs.length ; j++){
                if(strs[0][i] != strs[j][i]){
                    return strs[0].substring(0,i)
                }
            }
            i++;
        }
        return strs[0]
    }
};
