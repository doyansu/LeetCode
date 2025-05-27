﻿function findWordsContaining(words: string[], x: string): number[] {
    let result: number[] = [];
    for (let i = 0; i < words.length; ++i) {
        if (words[i].includes(x))
            result.push(i);
    }

    return result;
};

export const test_funtion_list = [
    findWordsContaining,
];

export const verify_function = undefined;
