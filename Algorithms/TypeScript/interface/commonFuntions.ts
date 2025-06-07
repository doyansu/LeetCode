import { ListNode, TreeNode } from "./LeetCodeDataStructure"

// 取得隨機整數 min <= number <= max 
export function get_random_integer(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 可快速指定隨機字串集合
export enum RandomStringType {
    Numeric = '0123456789',
    LowerAlpha = 'abcdefghijklmnopqrstuvwxyz',
    UpperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    Alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    AlphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
}

// 取得隨機字串 (長度 = length)
export function get_random_string(length: number, stringSet: RandomStringType | string = RandomStringType.LowerAlpha, isFastMode: boolean = true): string {
    return isFastMode ? get_random_string_fastmode(length, stringSet) : get_random_string_normalmode(length, stringSet);
}

function get_random_string_fastmode(length: number, stringSet: string) {
    let result = '';
    for (let i = 0; i < length; ++i) 
        result += stringSet[get_random_integer(0, stringSet.length - 1)];
    return result;
}

function get_random_string_normalmode(length: number, stringSet: string) {
    return new Array(length)
        .fill('')
        .map(() => stringSet[get_random_integer(0, stringSet.length - 1)])
        .join('');;
}

// 將 array 轉換成 ListNode
export function transform_array_to_listNode(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// 將二元堆轉換成二元樹節點
export function transform_binaryheap_to_binaryTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) 
        return null;
    
    let binary_heap = arr.map((value) => value != null ? new TreeNode(value, null, null) : null);

    for (let i = 0; (i << 1) < binary_heap.length; ++i) {
        if (binary_heap[i] !== null) {
            binary_heap[i]!.left = binary_heap[(i << 1) + 1];
            binary_heap[i]!.right = binary_heap[(i << 1) + 2];
        }
    }
    
    return binary_heap[0];
}