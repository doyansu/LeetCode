function triangleType(nums: number[]): string {
    nums.sort((a, b) => a - b);

    // 判斷是否為三角形
    if (nums[0] + nums[1] <= nums[2]) 
        return 'none';

    // 判斷三角形類型
    const uniqueSides = new Set(nums).size;
    if (uniqueSides === 1) return 'equilateral';
    if (uniqueSides === 2) return 'isosceles';
    return 'scalene';
}

export const test_funtions = [
    triangleType,
];