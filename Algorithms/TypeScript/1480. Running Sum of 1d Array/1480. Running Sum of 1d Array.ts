function runningSum(nums: number[]): number[] {
    let result: number[] = [];
    nums.reduce((org, acc) => {
        const next = org + acc;
        result.push(next);
        return next;
    }, 0);
    return result;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
