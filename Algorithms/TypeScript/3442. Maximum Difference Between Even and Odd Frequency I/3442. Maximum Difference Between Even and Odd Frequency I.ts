function maxDifference(s: string): number {
    let frequency_map: Map<string, number> = new Map();

    for (let i = 0; i < s.length; ++i) {
        frequency_map.set(s[i], (frequency_map.get(s[i]) || 0) + 1);
    }

    let max_add = 0, min_even = 0;

    frequency_map.forEach((value) => {
        if (value&1) {
            max_add = Math.max(max_add, value);
        } else {
            min_even = min_even > 0 ? Math.min(min_even, value) : value;
        }
    });

    return max_add - min_even;
};

export const test_funtion_list = [
    maxDifference,
];

export const verify_function: any = undefined;
