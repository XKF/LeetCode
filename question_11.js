/*


给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。


图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。


示例：

输入：[1,8,6,2,5,4,8,3,7]
输出：49

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water


*/


/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力法
// var maxArea = function(height) {
//     let maxS = 0, _S = 0;
//     for(let i = 0;i < height.length; i++){
//         for(let j = i + 1;j < height.length; j++){
//             let x = j - i;
//             _S =  x * Math.min(height[i],height[j])
//             maxS = maxS > _S ? maxS : _S
//         }
//     }
//     return maxS;
// };

// 优化
var maxArea = function(height) {
    let i = 0,j = height.length - 1,_S = 0;
        let minHeight =  Math.min(height[i],height[j]);
        let maxS = (j - i) * minHeight;
        while(i != j){
            if(height[i] < height[j]){
                i ++ ;
                if(height[i] > minHeight){
                    _S = (j - i) * Math.min(height[i],height[j]);
                }
            }else{
                j --;
                if(height[j] > minHeight){
                    _S = (j - i) * Math.min(height[i],height[j]);      
                }
            }
            maxS = Math.max(maxS,_S)
        }
        return maxS;
};
