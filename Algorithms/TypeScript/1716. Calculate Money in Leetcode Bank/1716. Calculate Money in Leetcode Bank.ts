function totalMoney(n: number): number {
    let q = Math.floor(n / 7);
    let r = n % 7;
    return 28 * q + 7 * ((q - 1) * q) / 2 + r * q + (r * (r + 1)) / 2;
};

export const test_funtion_list = [
    totalMoney,
];

export const verify_function: any = undefined;
