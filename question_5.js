/*

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    let start = 0,maxLen = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left,right) => {
        while(left >= 0 && right < n && s[left] == s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0;i < n;i++){
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        // 两种组合取最大回文串的长度
        let strLen = Math.max(len1,len2);
        if(strLen > maxLen){
            // 更新最大回文串的首尾字符索引
            start = i - parseInt((strLen - 1) / 2);
            maxLen = strLen;
        }
    }
    return s.substr(start,maxLen);
};

/*
此代码为参考优化后的代码
参考代码作者：Alexer-660
链接：https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-alexer-660/
来源：力扣（LeetCode）
*/
