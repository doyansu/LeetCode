function isSubsequence(s: string, t: string): boolean {
    let index = 0;
    for (const char of s) {
        while (char != t[index]) {
            if (++index >= t.length)
                return false;
        }
        ++index;
    }

    return true;
};

function isSubsequence1(s: string, t: string): boolean {
    let i = 0;
    for (const char of t) {
        if (char === s[i]) 
            ++i;
        if (i === s.length) 
            return true;
    }
    return i === s.length;
};

export const test_funtions = [
    isSubsequence,
    isSubsequence1,
];
