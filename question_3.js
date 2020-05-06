/*

3. 无重复字符的最长子串
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //自己的暴力写法...
    if(s.length == 0 || s.length == 1){
        return s.length;
    }
    let maxlen = 0;
    let count;
    let tag = [];
    for(let i = 0; i < s.length; i++){
        count = 1;
        tag.push(s[i]);
        for(let j = i+1; j < s.length; j++){
            if(!tag.includes(s[j])){
                count ++;
                tag.push(s[j]);
            }else{
                break;
            }
        }
        if(count > maxlen){
            maxlen = count;
        }
        tag = [];
    }
    return maxlen;

    //参考leetcode瓶子君的方法优化
    // let tag = [], maxlen = 0
    // for(let i = 0; i < s.length; i++) {
    //     let index = tag.indexOf(s[i])
    //     if(index != -1) {
    //         tag.splice(0, index+1);
    //     }
    //     tag.push(s[i])
    //     maxlen = Math.max(tag.length, maxlen) 
    // }
    // return maxlen;
};
