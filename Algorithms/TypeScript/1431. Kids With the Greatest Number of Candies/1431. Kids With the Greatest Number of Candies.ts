function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let result: boolean[] = [];
    let max_candies = 0; // Math.max(...candies);
    for (let kid = 0; kid < candies.length; ++kid) {
        max_candies = Math.max(max_candies, candies[kid]);
    }
    for (let kid = 0; kid < candies.length; ++kid) {
        result.push(candies[kid] + extraCandies >= max_candies);
    }
    return result;
};

export const test_funtions = [
    kidsWithCandies,
];
