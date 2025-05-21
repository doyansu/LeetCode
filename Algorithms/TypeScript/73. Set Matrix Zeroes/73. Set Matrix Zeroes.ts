// in place
// function setZeroes(matrix: number[][]): void {
    
// };

function setZeroes(matrix: number[][]): number[][] {
    let zero_row = new Set(), zero_column = new Set();
    for (let row = 0; row < matrix.length; ++row) {
        for (let col = 0; col < matrix[row].length; ++col) {
            if (matrix[row][col] == 0) {
                zero_row.add(row);
                zero_column.add(col);
            }
        }
    }
    for (let row = 0; row < matrix.length; ++row) {
        if (zero_row.has(row)) {
            for (let col = 0; col < matrix[row].length; ++col)
                matrix[row][col] = 0;
        }
    }
    for (let col = 0; col < matrix[0].length; ++col) {
        if (zero_column.has(col)) {
            for (let row = 0; row < matrix.length; ++row)
                matrix[row][col] = 0;
        }
    }
    
    return matrix;
};

function setZeroes1(matrix: number[][]): number[][] {
    let set_first_col = false;
    for (let row = 0; row < matrix.length; ++row) {
        if (matrix[row][0] == 0)
            set_first_col = true;
        for (let col = 1; col < matrix[row].length; ++col) {
            if (matrix[row][col] == 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }
    for (let row = matrix.length - 1; row >= 0; --row) {
        for (let col = matrix[row].length - 1; col >= 1; --col) {
            if (matrix[row][0] == 0 || matrix[0][col] == 0)
                matrix[row][col] = 0;
        }
        if (set_first_col)
            matrix[row][0] = 0;
    }

    return matrix;
};

export const test_funtions = [
    setZeroes,
    setZeroes1,
];
