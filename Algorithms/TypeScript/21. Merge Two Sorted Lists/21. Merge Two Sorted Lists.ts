// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function merge(nums1: number[], nums2: number[]): number[] {
    let new_array: number[] = [];
    let index1 = 0, index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) 
        new_array.push(nums1[index1] <= nums2[index2] ? nums1[index1++] : nums2[index2++]);
    while (index1 < nums1.length)
        new_array.push(nums1[index1++]);
    while (index2 < nums2.length)
        new_array.push(nums2[index2++]);
    return new_array;
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let root: ListNode = new ListNode();
    let current: ListNode = root;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next
    }
    while (list1) {
        current.next = list1;
        list1 = list1.next;
        current = current.next
    }
    while (list2) {
        current.next = list2;
        list2 = list2.next;
        current = current.next
    }
    return root.next;
};

export const test_funtions = [
    mergeTwoLists,
];
