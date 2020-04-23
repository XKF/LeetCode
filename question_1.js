/*
1、给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 *整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

题目来源：力扣（LeetCode）
题目链接：https://leetcode-cn.com/problems/two-sum
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length == 0){
        return false
    }
    // 下面这个性能太辣鸡
    // for(let [index,item] of nums.entries()){
    //     let nextIndex = index + 1;
    //     for(let [index2,item2] of nums.slice(nextIndex).entries()){
    //         if(item + item2 == target){
    //             let currentIndex = parseInt(index2) + nextIndex;
    //             return [index,currentIndex];
    //         }
    //     }
    // }

    // 暴力法时间复杂度太高
    // for(let i = 0;i < nums.length;i++){
    //     for(let j = i + 1;j < nums.length;j++){
    //         if(nums[i]+nums[j]==target){
    //             return [i,j];
    //         }
    //     }
    // }

    // 看了别人的优化,低时间复杂度
    let map = new Map();
    for(let i = 0;i < nums.length; i++){
        let _index = target - nums[i];
        if(map.has(_index)){
            return [map.get(_index),i]
        }else{
            map.set(nums[i],i);//用值做索引，索引做键值
        }
    }

    // 自己优化了下空间复杂度，但时间复杂度却变高了
    // for(let i = 0;i < nums.length; i++){
    //     let anotherVal = target - nums[i];
    //     if(nums.includes(anotherVal) && i != nums.indexOf(anotherVal)){
    //         return [i,nums.indexOf(anotherVal)]
    //     }else{
    //         continue;
    //     }
    // }
};
