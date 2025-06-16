function uniqueOccurrences(arr: number[]): boolean {
    // 紀錄每個 number 出現次數
    let numbers_count = new Map<number, number>();

    for (let i = 0; i < arr.length; ++i) {
        numbers_count.set(arr[i], (numbers_count.get(arr[i]) || 0) + 1);
    }
    
    // 出現次數有無相同
    return new Set(numbers_count.values()).size == numbers_count.size;
};

export const test_funtion_list = [
    uniqueOccurrences,
];

export const verify_function: any = undefined;
