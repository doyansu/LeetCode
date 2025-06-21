function pivotIndex_one_space(nums: number[]): number {
    // total sum
    let right_sum = nums.reduce((sum, value) => sum + value, 0);
    let left_sum = 0;

    for (let index = 0; index < nums.length; ++index) {
        right_sum -= nums[index];

        if (left_sum == right_sum)
            return index;

        left_sum += nums[index];
    }

    return -1;
};

function pivotIndex(nums: number[]): number {
    let prefix_sum = new Array(nums.length + 1).fill(0);

    for (let i = 0; i < nums.length; ++i) {
        prefix_sum[i + 1] = prefix_sum[i] + nums[i];
    }

    for (let index = 0; index < nums.length; ++index) {
        if (prefix_sum[index] == (prefix_sum[nums.length] - prefix_sum[index + 1]))
            return index;
    }

    return -1;
};

export const test_funtion_list = [
    pivotIndex_one_space,
    pivotIndex,
];

export const verify_function: any = undefined;
