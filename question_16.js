/*

16. 最接近的三数之和

给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 传统暴力法
    // let res;
    // if(nums.length === 3){
    //     res = nums[0] + nums[1] + nums[2]
    // }else{
    //     for(let i = 0; i < nums.length - 2; i++){
    //         for(let j = i+1; j < nums.length - 1; j++){
    //             for(let k = j+1; k < nums.length; k++){
    //                 let sum = nums[i]+nums[j]+nums[k]
    //                 if(res == undefined || Math.abs(sum-target) < Math.abs(res-target)){
    //                     res = sum
    //                 }
    //             }
    //         }
    //     }
    // }
    // return res;

    //排序+双指针
    nums.sort((a,b)=>{
        return a-b;
    })
    let min = nums[0] + nums[1] + nums[2];
    for(let i = 0;i < nums.length - 2;i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(right > left){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum == target){
                return sum;
            }else if(Math.abs(sum - target) < Math.abs(min - target)){
                min = sum;
            }
            sum < target ? left++ : right--;
        }
    }
    return min;
};

