function maxAdjacentDistance(nums: number[]): number {
    return nums.reduce((previousValue: number, currentValue: number, currentIndex: number) => {
        let difference = Math.abs(nums[currentIndex] - nums[(currentIndex + 1 < nums.length) ? currentIndex + 1 : 0]);
        return Math.max(previousValue, difference);
    }, 0);
};

export const test_funtion_list = [
    maxAdjacentDistance,
];

export const verify_function: any = undefined;
