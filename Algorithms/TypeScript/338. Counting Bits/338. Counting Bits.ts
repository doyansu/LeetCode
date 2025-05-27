function lowbit(n: number){
    return n & -n;
}

// 3ms
function countBits(n: number): number[] {
    let result: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; ++i) {
        let temp = i;
        while(temp){
            temp ^= lowbit(temp);
            ++result[i];
        }
    }

    return result;
};

// 1ms
function countBits1(n: number): number[] {
    let result: number[] = new Array(n + 1);
    result[0] = 0;
    for (let i = 1; i <= n; ++i) {
        result[i] = result[i ^ lowbit(i)] + 1;
    }

    return result;
};

let bit_list: number[] = new Array(100001).fill(0);
for (let i = 1; i <= 100001; ++i) {
    bit_list[i] = bit_list[i ^ lowbit(i)] + 1;
}

// 1ms
function countBits2(n: number): number[] {
    return bit_list.slice(0, n + 1);
};

// 1ms
function countBits3(n: number): number[] {
    let result: number[] = new Array(n + 1);
    result[0] = 0;
    for (let i = 1; i <= n; ++i) {
        result[i] = result[i>>1] + (i&1);
    }

    return result;
};

export const test_funtions = [
    countBits,
    countBits1,
    countBits2,
    countBits3,
];
