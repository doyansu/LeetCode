export function runningSum(nums: number[]): number[] {
    let result: number[] = [];
    nums.reduce((org, acc) => {
        const next = org + acc;
        result.push(next);
        return next;
    }, 0);
    return result;
};

export function runningSum2(nums: number[]): number[] {
    nums.reduce((previousValue: number, currentValue: number, currentIndex: number, array: number[]) => {
        array[currentIndex] += previousValue;
        return array[currentIndex];
    })
    return nums;
};
