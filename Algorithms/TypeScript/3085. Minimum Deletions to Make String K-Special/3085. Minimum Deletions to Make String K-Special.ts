// 16ms
function minimumDeletions_array(word: string, k: number): number {
    // "word" consists only of lowercase English letters 只需 26 個位置紀錄出現次數
    let freq_array = new Array(26).fill(0); 

    for (let i = 0; i < word.length; ++i) {
        ++freq_array[word.charCodeAt(i) - 97]; // 'a' charCode = 97 
    }

    freq_array = freq_array.filter((value) => value > 0).sort((a, b) => a - b);

    let min_deletions = Infinity;
    let left_deletions = 0;

    // 選定一個字母作為最低頻率，並計算所需刪除數。
    for (let i = 0; i < freq_array.length; ++i) {
        let right_deletions = freq_array.reduce((right_deletion, freq) => right_deletion + Math.max(0, freq - k - freq_array[i]), 0);

        min_deletions = Math.min(min_deletions, left_deletions + right_deletions);

        // 從低到高所以 left_deletions 為累加值
        left_deletions += freq_array[i];
    }

    // // 選定一個字母作為最低頻率，並計算所需刪除數。 19ms
    // for (let i = 0; i < freq_array.length; ++i) {
    //     let deletions = freq_array.reduce((acc, freq) => acc + (freq_array[i] > freq ? freq : Math.max(0, freq - k - freq_array[i])), 0);

    //     min_deletions = Math.min(min_deletions, deletions);
    // }

    return min_deletions;
};

// 43ms
function minimumDeletions(word: string, k: number): number {
    let freq_map = new Map<string, number>();

    for (let i = 0; i < word.length; ++i) {
        freq_map.set(word[i], (freq_map.get(word[i]) || 0) + 1);
    }

    let min_deletions = Infinity;
    let left_deletions = 0;
    let freq_array = [...freq_map.values()].sort((a, b) => a - b);

    for (let i = 0; i < freq_array.length; ++i) {
        let right_deletions = freq_array.reduce((right_deletion, freq) => right_deletion + Math.max(0, freq - k - freq_array[i]), 0);

        min_deletions = Math.min(min_deletions, left_deletions + right_deletions);

        left_deletions += freq_array[i];
    }

    return min_deletions;
};

export const test_funtion_list = [
    minimumDeletions_array,
    minimumDeletions,
];

export const verify_function: any = undefined;
