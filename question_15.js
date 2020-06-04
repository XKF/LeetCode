/*


给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum


*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let arr = []
    nums = nums.sort((a,b)=>{
        return a-b;
    })
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] == nums[i-1]){
            continue;
        }else{
            let j = i + 1;
            let k = nums.length - 1;
            while(j < k){
                let sum = nums[i] + nums[j] + nums[k]
                if(sum == 0){
                    arr.push([nums[i],nums[j],nums[k]])
                    j++
                    while(nums[j] == nums[j-1] && j < nums.length){
                        j++
                    }
                }else if(sum < 0){
                    j ++;
                }else{
                    k --;
                }
            }
        }
    }
    return arr;
};
