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

export const testFuntions = [ 
    middleNode, 
];