function longestSubarray(nums: number[]): number {
    const DELETE_TIMES = 1;
    let delete_times = DELETE_TIMES;
    let left = 0;

    for (let right = 0; right < nums.length; ++right) {
        if (nums[right] == 0) {
            --delete_times;
        }

        if (delete_times < 0) {
            if (nums[left] == 0)
                ++delete_times;

            ++left;
        }
    }

    return nums.length - left - DELETE_TIMES;
};

export const test_funtion_list = [
    longestSubarray,
];

export const verify_function: any = undefined;
