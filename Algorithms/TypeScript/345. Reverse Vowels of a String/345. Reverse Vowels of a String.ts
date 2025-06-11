function reverseVowels(s: string): string {
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const is_vowels = (char: string) => VOWELS.has(char);

    let vowels_index_array = [];

    // record vowels index
    for (let i = 0; i < s.length; ++i) {
        if (is_vowels(s[i]))
            vowels_index_array.push(i);
    }
    
    let reverse_array = s.split(''), left = 0, right = vowels_index_array.length - 1;

    // reverse
    while (left < right) {
        let left_index = vowels_index_array[left];
        let right_index = vowels_index_array[right];

        // swap
        [reverse_array[left_index], reverse_array[right_index]] = [reverse_array[right_index], reverse_array[left_index]];
        
        ++left;
        --right;
    }

    return reverse_array.join('');
};

export const test_funtion_list = [
    reverseVowels,
];

export const verify_function: any = undefined;
