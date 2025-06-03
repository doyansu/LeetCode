function tribonacci(n: number): number {
    let tribonacci_array = [0, 1, 1];
    for (let i = 3; i <= n; ++i) {
        tribonacci_array[i] = tribonacci_array[i - 1] + tribonacci_array[i - 2] + tribonacci_array[i - 3];
    }
    return tribonacci_array[n];
};

export const test_funtion_list = [
    tribonacci,
];

export const verify_function: any = undefined;
