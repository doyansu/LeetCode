function productExceptSelf(nums: number[]): number[] {
    let products = new Array(nums.length).fill(1);
    let left = 1, right = 1;

    for (let i = 0; i < nums.length; ++i) {
        products[i] *= left;
        left *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; --i) {
        products[i] *= right;
        right *= nums[i];
    }

    // clean -0
    return products.map((value) => value === 0 ? 0 : value);
};

export const test_funtion_list = [
    productExceptSelf,
];

export const verify_function: any = undefined;
