function longestOnes(nums: number[], k: number): number {
    let longest_one = 0;
    let last_zero_index = -1;
    let zero_queue = [];

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == 0) {
            zero_queue.push(i);
            if (zero_queue.length > k) {
                last_zero_index = zero_queue.shift()!;
            }
        }
        
        longest_one = Math.max(longest_one, i - last_zero_index);
    }

    return longest_one;
};

export const test_funtion_list = [
    longestOnes,
];

export const verify_function: any = undefined;
