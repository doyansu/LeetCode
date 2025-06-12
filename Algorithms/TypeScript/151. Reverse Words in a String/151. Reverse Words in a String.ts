// 5ms
function reverseWords(s: string): string {
    let words: string[] = [];

    for (let i = 0; i < s.length; ++i) {
        if (s[i] != ' ') {
            let start = i;
            while (s[i] != ' ' && i < s.length) ++i;
            words.unshift(s.slice(start, i));
        }
    }

    return words.join(' ');
};

// 2ms
function reverseWords_fast(s: string): string {
    let words: string[] = [];

    for (let i = 0; i < s.length; ++i) {
        if (s[i] != ' ') {
            let start = i;
            while (s[i] != ' ' && i < s.length) ++i;
            words.push(s.slice(start, i));
        }
    }

    return words.reverse().join(' ');
};

// 2ms
function reverseWords_clean(s: string): string {
    return s
        .split(' ')
        .filter((word) => word != '')
        .reverse()
        .join(' ');
};

// 1ms
function reverseWords_opt(s: string): string {
    return s
        .split(' ')
        .filter((word) => word.trim().length > 0)
        .reverse()
        .join(' ');
};

export const test_funtion_list = [
    reverseWords_fast,
    reverseWords_clean,
    reverseWords,
];

export const verify_function: any = reverseWords_opt;
