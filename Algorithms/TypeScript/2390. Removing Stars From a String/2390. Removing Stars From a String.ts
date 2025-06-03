function removeStars(s: string): string {
    const stack = [];
    for (let i = 0; i < s.length; ++i) {
        const char = s[i];
        if (char === '*')
            stack.pop();
        else
            stack.push(char);
    }
    return stack.join('');
};

export const test_funtion_list = [
    removeStars,
];

export const verify_function: any = undefined;
