import { Queue } from '../interface/myDataStructure/myQueue'

function longestOnes(nums: number[], k: number): number {
    let left = 0;

    for (let right = 0; right < nums.length; ++right) {
        if (nums[right] == 0) {
            --k;
        }
        
        if (k < 0) {
            if (nums[left] == 0)
                ++k;

            ++left;
        }
    }

    return nums.length - left;
};

function longestOnes_queue(nums: number[], k: number): number {
    let longest_one = 0;
    let last_zero_index = -1;
    let zero_queue: Queue<number> = new Queue();

    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] == 0) {
            zero_queue.enqueue(i);
            if (zero_queue.size() > k) {
                last_zero_index = zero_queue.dequeue()!;
            }
        }
        
        longest_one = Math.max(longest_one, i - last_zero_index);
    }

    return longest_one;
};

export const test_funtion_list = [
    longestOnes,
    longestOnes_queue,
];

export const verify_function: any = undefined;
