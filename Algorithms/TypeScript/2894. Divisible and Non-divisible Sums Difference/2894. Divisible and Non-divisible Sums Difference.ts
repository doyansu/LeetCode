function differenceOfSums(n: number, m: number): number {
    let n_div_m = Math.floor(n / m);
    // let result = (((n + 1) * n) >> 1) - ((m * (((n_div_m + 1) * n_div_m) >> 1)) << 1);
    let result = (((n + 1) * n) >> 1) - m * ((n_div_m + 1) * n_div_m);
    return result;
};

function differenceOfSums_brute_force(n: number, m: number): number {
    let num1 = 0, num2 = 0;
    for (let i = 1; i <= n; ++i) {
        if (i % m === 0) {
            num2 += i;
        } else {
            num1 += i;
        }
    }
    return num1 - num2;
}; 

export const test_funtions = [
    differenceOfSums,
];

export const verify_function = differenceOfSums_brute_force;