// 22ms
function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    } 

    // 初始化 magazine 中每個字元的出現次數
    let hash_map : Record<string, number> = {};
    for (const char of magazine) {
        if (hash_map[char] === undefined)
            hash_map[char] = 0;
        hash_map[char]++;
    }

    // 檢查 ransomNote 中每個字元是否足夠
    for (const char of ransomNote) {
        if (hash_map[char] === undefined || --hash_map[char] < 0) {
            return false;
        }
    }

    return true;
};

// 18ms
function canConstruct1(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    } 

    // 初始化 magazine 中每個字元的出現次數
    let hash_map : Map<string, number> = new Map<string, number>();
    for (const char of magazine) {
        hash_map.set(char, (hash_map.get(char) || 0) + 1);
    }

    // 檢查 ransomNote 中每個字元是否足夠
    for (const char of ransomNote) {
        if (!hash_map.has(char) || hash_map.get(char)! <= 0) {
            return false;
        }
        hash_map.set(char, hash_map.get(char)! - 1);
    }

    return true;
};

// 14ms 57.78MB
function canConstruct2(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) {
        return false;
    } 

    // 初始化 magazine 中每個字元的出現次數
    let hash_map : Map<string, number> = new Map<string, number>();
    for (let i = 0; i < magazine.length; i++) {
        let char = magazine.charAt(i);
        hash_map.set(char, (hash_map.get(char) || 0) + 1);
    }

    // 檢查 ransomNote 中每個字元是否足夠
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote.charAt(i);
        if (!hash_map.has(char) || hash_map.get(char)! <= 0) {
            return false;
        }
        hash_map.set(char, hash_map.get(char)! - 1);
    }

    return true;
};

export const test_funtions = [ 
    canConstruct, 
    canConstruct1,
    canConstruct2,
];