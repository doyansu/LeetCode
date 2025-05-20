function moveZeroes(nums: number[]): number[] {
    let zero_index = nums.indexOf(0);
    for (let i = (zero_index >= 0 ? zero_index : nums.length) + 1; i < nums.length; ++i) {
        if (nums[i]) {
            nums[zero_index] = nums[i];
            nums[i] = 0;
            zero_index++;
        }
    }
    return nums;
};

// function moveZeroes(nums: number[]): void {
    
// };

export const test_funtions = [
    moveZeroes,
];
