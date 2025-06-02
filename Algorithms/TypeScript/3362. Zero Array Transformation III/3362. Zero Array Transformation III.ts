import { MaxPriorityQueue } from "../interface/myDataStructure/maxPriorityQueue"

function maxRemoval_greedy_priorityqueue(nums: number[], queries: number[][]): number {
    queries.sort((a, b) => a[0] - b[0]);
    const heap = new MaxPriorityQueue<number>();
    const deltaArray: number[] = new Array(nums.length + 1).fill(0);
    let operations = 0;

    for (let i = 0, j = 0; i < nums.length; i++) {
        operations += deltaArray[i];
        while (j < queries.length && queries[j][0] === i) {
            heap.push(queries[j][1]);
            j++;
        }
        while (operations < nums[i] && !heap.isEmpty() && heap.front()! >= i) {
            operations += 1;
            deltaArray[heap.pop()! + 1] -= 1;
        }
        if (operations < nums[i]) {
            return -1;
        }
    }
    return heap.size();
}

// error
function maxRemoval(nums: number[], queries: number[][]): number {
    let sorded_queries = queries.slice().sort((a, b) => {
        let delta = b[1] - b[0] - a[1] + a[0];
        return delta != 0 ? delta : a[0] - b[0];
    });

    let delta_array: number[] = new Array(nums.length + 1).fill(0);
    let operations = 0, min_k = 0, max_removal = queries.length;

    for (let index = 0; index < nums.length; ++index) {
        while (operations + delta_array[index] < nums[index]) {
            
            if (++min_k > queries.length) 
                return -1;

            const [left, right] = sorded_queries[min_k - 1];
            if (right >= index) {
                ++delta_array[Math.max(left, index)];
                --delta_array[right + 1];
                --max_removal;
            }
        }
        operations += delta_array[index];

        if (operations < nums[index]) 
            return -1;
    }

    return max_removal;
};

export const test_funtions = [
    maxRemoval_greedy_priorityqueue,
];

export const verify_function: any = undefined;
