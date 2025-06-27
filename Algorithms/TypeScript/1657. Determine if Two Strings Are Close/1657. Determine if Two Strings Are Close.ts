function closeStrings(word1: string, word2: string): boolean {
    // 長度不同不是近似
    if (word1.length != word2.length)
        return false;
    
    let word1_count = new Array(26).fill(0);
    let word2_count = new Array(26).fill(0);

    for (let i = 0; i < word1.length; ++i) {
        // word1 and word2 contain only lowercase English letters. ('a''s charCode = 97)
        ++word1_count[word1.charCodeAt(i) - 97];
        ++word2_count[word2.charCodeAt(i) - 97];
    }

    // 組成元素不同則不是近似
    for (let i = 0; i < 26; ++i) {
        if ((word1_count[i] > 0 && word2_count[i] == 0) || (word2_count[i] > 0 && word1_count[i] == 0))
            return false;
    }

    word1_count = word1_count.sort((a, b) => b - a);
    word2_count = word2_count.sort((a, b) => b - a);

    for (let i = 0; i < 26; ++i) {
        if (word1_count[i] != word2_count[i])
            return false;
    }

    return true;
};

export const test_funtion_list = [
    closeStrings,
];

export const verify_function: any = undefined;
