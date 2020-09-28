/*

给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    const len = nums.length;
    // 长度小于4直接返回
    if(len < 4){
        return result;
    }   
    //排序
    nums.sort((a,b)=>{
        return a-b;
    })
    // 排序后前4个就大于target或后4个仍小于target直接返回
    if((nums[0]+nums[1]+nums[2]+nums[3] > target) || (nums[len-4]+nums[len-3]+nums[len-2]+nums[len-1] < target)){
        return result;
    }
    //参照三数之和双指针遍历，i为每个数组第一个数
    for(let i = 0; i < len - 3;i++){
        //去除第一个重复的
        if(i > 0 && nums[i] == nums[i-1]) continue;
        // j为每个数组第二数
        for(j = i + 1; j < len - 2; j++){
            // 去除第二重复的
            if(j > i + 1 && nums[j] == nums[j-1]) continue;
            // 左右双指针
            let left = j + 1;
            let right = len - 1; 
            // 遍历
            while(left < right){
                // 大于target时右指针右移
                if((nums[i] + nums[j] + nums[left] + nums[right]) > target){
                    while(nums[right] == nums[--right] && left < right);
                }else {
                    // 等于时插入最终数组
                    nums[i] + nums[j] + nums[left] + nums[right] == target && result.push([nums[i], nums[j], nums[left], nums[right]])
                    // 小于等于时左指针左移
                    while(nums[left] == nums[++left] && left < right);
                }
            }
        }

    }
    return result;
};

