// 6ms
function hasSameDigits_force(s: string): boolean {
    let digits = [...s].map((char) => parseInt(char));
    while (digits.length > 2) {
        for (let i = 0; i < digits.length - 1; i++) {
            digits[i] = (digits[i] + digits[i + 1]) % 10;
        }
        digits.pop();
    }

    return digits[0] == digits[1];
};

// 組合數 Cn 取 r 
function combinations(n: number, r: number): number {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;

    if (r > (n >>> 1)) 
        r = n - r;

    let numerator = 1;

    for (let i = 1; i <= r; ++i) {
        numerator *= n--;
        numerator /= i;
    }

    return numerator;
}

function hasSameDigits_Binomial_Coefficient(s: string): boolean {
    // const n = s.length;

    // let coefficient = new Array(n - 1).fill(1);
    
    // for (let i = 1; i < coefficient.length - 1; i++) {
    //     coefficient[i] = Math.floor((coefficient[i - 1] * (n - 2 - i + 1) / i)) % 10;
    // }
    // const get_sum = (previousValue: number, currentValue: string, currentIndex: number) => {
    //     return previousValue + parseInt(currentValue) * coefficient[currentIndex];
    // }

    // let n1 = [...s.slice(0, -1)].reduce(get_sum, 0) % 10;
    // let n2 = [...s.slice(1)].reduce(get_sum, 0) % 10;

    // return n1 == n2;
    return false;
};

export const test_funtion_list = [
    hasSameDigits_force,
];

export const verify_function: any = undefined;
