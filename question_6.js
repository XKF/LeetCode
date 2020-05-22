/*

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"

示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zigzag-conversion

*/



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }else{
        let i = 0, j = 0, arr = new Array(numRows) 
        for(let i = 0; i<arr.length; i++){
            arr[i] = new Array()
        }
        s.split('').map(item=>{
            arr[i][j] = item;        
            if((i == numRows - 1 && j % (numRows - 1) == 0) || j % (numRows - 1) != 0){
                i --
                j ++
            }else{
                i ++
            }
        })
        let new_s = '';
        arr.map(item=>{
            new_s += item.join('')
        })
        return new_s
    }
};
