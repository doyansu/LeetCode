function singleNumber(nums: number[]): number {
    let single_number = 0;
    for (let i = 0; i < nums.length; ++i)
        single_number ^= nums[i];
    return single_number;
};

function singleNumber_reduce(nums: number[]): number {
    return nums.reduce((single_number, value) => single_number ^ value);
};

export const test_funtion_list = [
    singleNumber,
    singleNumber_reduce,
];

export const verify_function: any = undefined;
