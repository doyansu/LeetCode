export function runningSum(nums: number[]): number[] {
    let result: number[] = [];
    nums.reduce((org, acc) => {
        const next = org + acc;
        result.push(next);
        return next;
    }, 0);
    return result;
};
