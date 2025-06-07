function maxVowels_window(s: string, k: number): number {
    let is_vowels = (char: string) => ['a', 'e', 'i', 'o', 'u'].includes(char);
    let current = 0, max_vowels = 0;

    for (let i = 0; i < s.length; ++i) {
        if (is_vowels(s[i]))
            ++current;

        if (i >= k && is_vowels(s[i - k]))
            --current;

        max_vowels = Math.max(max_vowels, current);

        if (max_vowels == k)
            return k;
    }

    return max_vowels;
};

function maxVowels_diff_array(s: string, k: number): number {
    let is_vowels = (char: string) => ['a', 'e', 'i', 'o', 'u'].includes(char);
    let delta_array = new Array(s.length + k).fill(0);
    let current = 0, max_vowels = 0;

    for (let i = 0; i < s.length; ++i) {
        if (is_vowels(s[i])) {
            ++current;
            delta_array[i + k] = -1;
        }

        current += delta_array[i];

        max_vowels = Math.max(max_vowels, current);

        if (max_vowels == k)
            return k;
    }

    return max_vowels;
};

export const test_funtion_list = [
    maxVowels_window,
];

export const verify_function: any = maxVowels_diff_array;
