function isPalindrome(x: number): boolean {
    let s = x.toString();
    for (let i = 0; i < (s.length>>1); i++) {
        if (s[i] != s[s.length - i - 1])
            return false;
    } 
    return true;
};

export const test_funtions = [
    isPalindrome,
];