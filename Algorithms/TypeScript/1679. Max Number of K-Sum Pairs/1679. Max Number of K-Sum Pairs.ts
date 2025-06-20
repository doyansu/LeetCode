// 63ms beats 100%
function maxOperations(nums: number[], k: number): number {
    let numbers_count = new Map();

    let operation = 0;

    for (let i = 0; i < nums.length; ++i) {
        let pair_number = k - nums[i];

        // 大於等於 k 的數無法配對 (num[i] >= 1)
        if (pair_number > 0) {
            let pair_number_count = numbers_count.get(pair_number);

            // 檢查有無數字可配對
            if (pair_number_count == undefined || pair_number_count == 0) {
                numbers_count.set(nums[i], (numbers_count.get(nums[i]) || 0) + 1);
            } else {
                ++operation;
                numbers_count.set(pair_number, pair_number_count - 1);
            }
        }
    }

    return operation;
};

export const test_funtion_list = [
    maxOperations,
];

export const verify_function: any = undefined;
