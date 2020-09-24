/* 

17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

*/


/**
 * @param {string} digits
 * @return {string[]}
 * BFS 层序遍历
 */
var letterCombinations = function(digits) {
    if(digits.length == 0){
        return [];
    }
    const charArr = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    let queue = charArr[digits[0]].split('');
    for(let i = 1;i < digits.length; i++){
        let len = queue.length;
        for(let j = 0;j < len; j++){
            let temp = queue.shift();
            for(let l = 0;l < charArr[digits[i]].length; l++){
                queue.push(`${temp}${charArr[digits[i]][l]}`)
            }
        }
    }
    return queue;
};


