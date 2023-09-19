"use strict";
function maxSubarraySum(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = currentSum + Number(nums[i]);
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        else if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}
function handle_bai_5() {
    const nums = prompt("Nhập mảng nums: ").split(" ");
    const maxSum = maxSubarraySum(nums);
    console.log("Tổng của mảng con có tổng lớn nhất là:", maxSum);
}
