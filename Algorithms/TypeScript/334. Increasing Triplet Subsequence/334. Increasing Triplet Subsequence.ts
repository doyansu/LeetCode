function increasingTriplet(nums: number[]): boolean {
    let found_numbers = [Infinity, Infinity]; // first seconed

    for (let i = 0; i < nums.length; ++i) {
        let j;

        for (j = 0; j < found_numbers.length; ++j) {
            if (nums[i] <= found_numbers[j]) {
                found_numbers[j] = nums[i];
                break;
            }
        }
        
        // 找到最後一個數字(比前面都大)
        if (j >= found_numbers.length)
            return true;
    }

    return false;
};

export const test_funtion_list = [
    increasingTriplet,
];

export const verify_function: any = undefined;
