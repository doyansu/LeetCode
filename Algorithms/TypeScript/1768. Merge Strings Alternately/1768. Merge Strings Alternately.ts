// 48ms
function mergeAlternately(word1: string, word2: string): string {
    let merged_string = ''
    while (word1 != '' && word2 != '') {
        merged_string += word1[0];
        merged_string += word2[0];
        word1 = word1.slice(1);
        word2 = word2.slice(1);
    }
    merged_string += word1 != '' ? word1 : word2;
    return merged_string;
};

// 38ms
function mergeAlternately1(word1: string, word2: string): string {
    let merged_string = ''
    while (word1 != '' && word2 != '') {
        merged_string += word1[0];
        merged_string += word2[0];
        word1 = word1.substring(1);
        word2 = word2.substring(1);
    }
    merged_string += word1 != '' ? word1 : word2;
    return merged_string;
};

// 42ms
function mergeAlternately2(word1: string, word2: string): string {
    let merged_string = ''
    let index = 0;
    for (index = 0; index < word1.length && index < word2.length; ++index) {
        merged_string += word1[index];
        merged_string += word2[index];
    }
    merged_string += word1.substring(index);
    merged_string += word2.substring(index);
    return merged_string;
};

export const test_funtions = [
    mergeAlternately,
    mergeAlternately1,
    mergeAlternately2,
];
