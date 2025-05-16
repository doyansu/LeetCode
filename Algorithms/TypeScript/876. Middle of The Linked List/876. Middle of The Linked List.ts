 // Definition for singly-linked list.
 export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
 }

function middleNode(head: ListNode | null): ListNode | null {
    let temp_node : ListNode | null = head;
    let count : number = 1;
    // count size
    while(temp_node != null && temp_node.next !== null) {
        count++;
        temp_node = temp_node.next;
    }
    count >>= 1;

    // get mid node
    while(head != null && count--) {
        head = head.next;
    }
    return head;
};

function middleNode1(head: ListNode | null): ListNode | null {
    let temp_node : ListNode | null = head;
    let count : number = 1;
    while(temp_node != null && temp_node.next !== null) {
        count++;
        temp_node = temp_node.next;
        if (head != null && (count&1) == 0) {
            head = head.next;
        }
    }
    return head;
};

function middleNode2(head: ListNode | null): ListNode | null {
    let slow : ListNode | null  = head;
    let fast : ListNode | null = head;
    
    while (fast != null && fast.next != null) {
        if (slow != null)
            slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
};

export const testFuntions = [ 
    middleNode, 
    middleNode1,
    middleNode2,
];