import { MaxPriorityQueue } from '../interface/myDataStructure/maxPriorityQueue';

// counting sort
function findKthLargest_counting_sort(nums: number[], k: number): number {
    let max_value = Math.max(...nums);
    let min_value = Math.min(...nums);

    let conut_array = new Array(max_value - min_value + 1).fill(0);

    for (let i = 0; i < nums.length; ++i) 
        ++conut_array[nums[i] - min_value];

    for (let i = conut_array.length - 1; i >= 0; --i) {
        k -= conut_array[i];

        if (k <= 0) 
            return i + min_value;
    }

    return -1;
};

// sort
function findKthLargest_sort(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1];
};

// heap PriorityQueue
function findKthLargest_priorityqueue(nums: number[], k: number): number {
    let heap = new MaxPriorityQueue<number>();

    for (let i = 0; i < nums.length; ++i) {
        heap.push(nums[i]);
    }

    while (--k > 0) {
        heap.pop();
    }

    return heap.front() || 0;
};

export const test_funtion_list = [
    findKthLargest_counting_sort,
];

export const verify_function: any = findKthLargest_priorityqueue;
