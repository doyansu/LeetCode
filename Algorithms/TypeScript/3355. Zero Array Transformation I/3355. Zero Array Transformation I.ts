// 18ms Difference Array
function isZeroArray(nums: number[], queries: number[][]): boolean {
    let delta_array: number[] = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < queries.length; ++i) {
        let left = queries[i][0];
        let right = queries[i][1];
        delta_array[left]++;
        delta_array[right + 1]--;
    }
    let currnt_operator = 0;
    for (let i = 0; i < nums.length; ++i) {
        currnt_operator += delta_array[i];
        if (currnt_operator < nums[i]) {
            return false;
        }
    }
    return true;
};

// TLE
function isZeroArray1(nums: number[], queries: number[][]): boolean {
    let is_zero_array: boolean = true;
    for (let i = 0; i < queries.length; i++) {
        let left = queries[i][0];
        let right = queries[i][1];
        for (let j = left; j <= right; j++) {
            if (nums[j] > 0)
                nums[j]--;
        }
    }

    for (let i = 0; i < nums.length; i++)
        if (nums[i] > 0) {
            is_zero_array = false;
            break;
        }
    return is_zero_array;
};

// TLE
function isZeroArray2(nums: number[], queries: number[][]): boolean {
    let is_zero_array: boolean = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < queries.length; j++) {
            let left = queries[j][0];
            let right = queries[j][1];
            if (i >= left && i <= right)
                nums[i]--;
        }
        if (nums[i] > 0) {
            is_zero_array = false;
            break;
        }
    }
    return is_zero_array;
};

export const test_funtions = [
    isZeroArray,
    // isZeroArray1,
    // isZeroArray2,
];
