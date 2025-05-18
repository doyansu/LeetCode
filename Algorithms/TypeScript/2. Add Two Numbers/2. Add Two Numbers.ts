// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head : ListNode | null = new ListNode(0);
    let current : ListNode | null = head;
    while (l1 || l2) {
        let sum : number = (l1?.val || 0) + (l2?.val || 0) + current.val;
        current.val = sum % 10;
        
        l1 = l1?.next || null;
        l2 = l2?.next || null;

        if (sum >= 10 || l1 || l2) {
            current.next = new ListNode((sum - current.val) / 10)
            current = current.next;
        }
    }
    return head;
};

// 1ms
function addTwoNumbers1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head : ListNode | null = new ListNode(0);
    let current : ListNode | null = head;
    let carry : number = 0; 

    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(carry % 10);
        current = current.next;
        carry = Math.floor(carry / 10);
    }
    return head.next;
};

export const test_funtions = [
    addTwoNumbers,
    addTwoNumbers1,
];