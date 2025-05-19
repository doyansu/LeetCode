function isPalindrome(s: string): boolean {
    for (let i = 0; i < (s.length>>1); i++) {
        if (s[i] != s[s.length - i - 1])
            return false;
    } 
    return true;
}

// 59ms
function longestPalindrome(s: string): string {
    let longest_palindrome: string = s[0];
    const char_index_Map: Map<string, number> = new Map();

    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest_palindrome.length) 
                longest_palindrome = s.substring(left, right + 1);
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        if (char_index_Map.has(s[i])) {
            let index_start = char_index_Map.get(s[i])!;
            if (isPalindrome(s.substring(index_start, i + 1))) {
                expandAroundCenter(index_start, i);
            }
        }
        char_index_Map.set(s[i], i);
    }

    return longest_palindrome;
};

// 22ms 中心擴展法
function longestPalindrome1(s: string): string {
    let longest: string = '';

    function expandAroundCenter(left: number, right: number): void {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) 
                longest = s.substring(left, right + 1);
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);     // 單字符中心 (奇數長度迴文)
        expandAroundCenter(i, i + 1); // 雙字符中心 (偶數長度迴文)
    }

    return longest;
}

// 17ms 中心擴展法
function longestPalindrome2(s: string): string {
    let longest: string = '';

    function expandAroundCenter(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let add = expandAroundCenter(i, i);     // 單字符中心 (奇數長度迴文)
        let even = expandAroundCenter(i, i + 1); // 雙字符中心 (偶數長度迴文)
        if (add.length > longest.length)
            longest = add;
        if (even.length > longest.length)
            longest = even;
    }

    return longest;
}

// 13ms Manacher's Algorithm
function longestPalindrome3(s: string): string {
    if (s.length <= 1) return s;

    // 處理特殊字串使其具有統一性
    const newStr = '#' + s.split('').join('#') + '#';
    const n = newStr.length;
    const dp: number[] = new Array(n).fill(0);

    let center = 0, right = 0;
    let maxLen = 1, start = 0;

    for (let i = 0; i < n; i++) {
        // 使用對稱性加速計算
        if (i < right) {
            dp[i] = Math.min(right - i, dp[2 * center - i]);
        }

        // 嘗試從當前中心擴展
        while (i - dp[i] - 1 >= 0 && i + dp[i] + 1 < n && newStr[i - dp[i] - 1] === newStr[i + dp[i] + 1]) {
            dp[i]++;
        }

        // 更新中心和右邊界
        if (i + dp[i] > right) {
            center = i;
            right = i + dp[i];
        }

        // 更新最大長度與起始位置
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            start = (i - maxLen) / 2; // 計算原字串起點
        }
    }

    // 返回去除特殊字元後的回文子串
    return s.substring(start, start + maxLen);
}

export const test_funtions = [
    longestPalindrome,
    longestPalindrome1,
    longestPalindrome2,
    longestPalindrome3,
];