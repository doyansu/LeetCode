function findMaxAverage(nums: number[], k: number): number {
    let max_sum = 0, current_sum = 0;
    for (let i = 0; i < k; ++i)
        max_sum += nums[i];

    current_sum = max_sum;
    for (let i = k; i < nums.length; ++i) {
        current_sum -= nums[i - k];
        current_sum += nums[i];
        max_sum = Math.max(max_sum, current_sum);
    }
    return max_sum / k;
};

export const test_funtions = [
    findMaxAverage,
];
