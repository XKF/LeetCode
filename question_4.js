/*

4. 寻找两个正序数组的中位数

给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a,b)=>{
        return a-b;
    });
    let len = nums.length;
    if(len%2 == 1){
        return nums[parseInt(len/2)]
    }else{
        return ((nums[len/2 - 1] + nums[len/2])/2)
    }
};
