import { ListNode } from '../interface/LeetCodeDataStructure'; 

function deleteMiddle(head: ListNode | null): ListNode | null {
    let root: ListNode | null = new ListNode(-1, head);
    let slow: ListNode | null = root;
    let fast = root.next?.next;

    while (fast != null) {
        fast = fast.next?.next || null;
        slow = slow?.next || null;
    }
    
    if (slow?.next != null)
        slow.next = slow.next.next;

    return root.next;
};

function deleteMiddle_no_root(head: ListNode | null): ListNode | null {
    if(!head?.next) return null;

    let slow: ListNode | null = head;
    let fast = head.next.next;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow!.next;
    }
    slow!.next = slow?.next?.next || null;

    return head;
};

export const test_funtion_list = [
    deleteMiddle_no_root,
];

export const verify_function: any = deleteMiddle;
