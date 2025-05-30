function isZeroArray(nums: number[], delta_array: number[]): boolean {
    let currnt_operator = 0;
    for (let i = 0; i < nums.length; ++i) {
        currnt_operator += delta_array[i];
        if (currnt_operator < nums[i]) {
            return false;
        }
    }
    return true;
};

// 33ms Line Sweep O(N+M)
function minZeroArray(nums: number[], queries: number[][]): number {
    let n = nums.length, sum = 0, k = 0;
    let delta_arrays: number[] = new Array(n + 1).fill(0);

    for (let index = 0; index < n; ++index) {
        while (sum + delta_arrays[index] < nums[index]) {
            ++k;

            if (k > queries.length)
                return -1;
            
            const [left, right, val] = queries[k - 1];
            if (right >= index) {
                delta_arrays[Math.max(left, index)] += val;
                delta_arrays[right + 1] -= val;
            }
        }
        sum += delta_arrays[index];
    }

    return k;
};

// 61ms difference array + binary search O(log(M)⋅(N+M))
function minZeroArray_binary_search(nums: number[], queries: number[][]): number {
    const get_delta_arrays = (index: number): number[] => {
        let delta_arrays = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < index; ++i) {
            const [left, right, val] = queries[i];
            delta_arrays[left] += val;
            delta_arrays[right + 1] -= val;
        }
        return delta_arrays;
    };

    if (isZeroArray(nums, get_delta_arrays(0)))
        return 0;

    if (!isZeroArray(nums, get_delta_arrays(queries.length)))
        return -1;
    
    let left = 0, right = queries.length - 1;
    while (left <= right) {
        let mid = (left + right) >> 1;

        if (isZeroArray(nums, get_delta_arrays(mid)))
            right = mid - 1; 
        else
            left = mid + 1;
    }

    return left;
};

// TLE
function minZeroArray_brute_force(nums: number[], queries: number[][]): number {
    let delta_arrays: number[] = new Array(nums.length + 1).fill(0);

    if (isZeroArray(nums, delta_arrays))
        return 0;

    for (let k = 0; k < queries.length; ++k) {
        const [left, right, val] = queries[k];
        delta_arrays[left] += val;
        delta_arrays[right + 1] -= val;
        if (isZeroArray(nums, delta_arrays))
            return k + 1;
    }

    return -1;
};

export const test_funtions = [
    minZeroArray,
];
