function lengthOfLongestSubstring(s: string): number {
    let longest: number = 0;
    let start: number = 0;
    const char_index_Map: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
        if (char_index_Map.has(s[i]) && char_index_Map.get(s[i])! >= start) {
            // 更新起點為重複字元的下一個位置
            start = char_index_Map.get(s[i])! + 1;
        }
        // 更新字元出現位置
        char_index_Map.set(s[i], i);
        // 計算當前無重複子串長度
        longest = Math.max(longest, i - start + 1);
    }

    return longest;
}


export const test_funtions = [
    lengthOfLongestSubstring,
];