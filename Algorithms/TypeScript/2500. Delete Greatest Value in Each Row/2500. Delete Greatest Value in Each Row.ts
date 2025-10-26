function deleteGreatestValue(grid: number[][]): number {
    let result = 0;
    grid.forEach((col) => col.sort((a, b) => b - a));
    
    for (let col = 0; col < grid[0].length; col++) {
        let max = 0;
        for (let row = 0; row < grid.length; row++) {
            max = grid[row][col] > max ? grid[row][col] : max;
        }
        result += max;
    }
    
    return result;
};

export const test_funtion_list = [
    deleteGreatestValue,
];

export const verify_function: any = undefined;
