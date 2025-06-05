// 組合數 Cn 取 r 
function combinations(n: number, r: number): number {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;

    if (r > (n >>> 1)) 
        r = n - r;

    let numerator = 1;

    for (let i = 1; i <= r; ++i) {
        numerator *= n--;
        numerator /= i;
    }

    return numerator;
}

// 路徑由(m - 1)個向下及(n - 1)個向右組成，答案即為(m + n - 2)取(m - 1)向下or(n - 1)向右個的組合數
function uniquePaths_combinations(m: number, n: number): number {
    return combinations(m + n - 2, Math.min(m - 1, n - 1));
};

// dp
function uniquePaths_dp(m: number, n: number): number {
    let unique_paths_grid: number[][] = new Array(m).fill(new Array(n).fill(1));
    for (let row = 1; row < m; ++row) {
        for (let col = 1; col < n; ++col) {
            unique_paths_grid[row][col] = unique_paths_grid[row - 1][col] + unique_paths_grid[row][col - 1];
        }
    }
    return unique_paths_grid[m - 1][n - 1];
};

export const test_funtion_list = [
    uniquePaths_combinations,
];

export const verify_function: any = uniquePaths_dp;
