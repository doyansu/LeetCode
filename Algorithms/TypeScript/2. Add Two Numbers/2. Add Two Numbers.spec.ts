import { TestCase, test_template } from '../interface/testCase';
import { test_funtions, ListNode } from './2. Add Two Numbers';

function arrayToListNode(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

let ex1_l1 = [2,4,3], ex1_l2 = [5,6,4], ex1_o1 = [7,0,8];
let ex2_l1 = [0], ex2_l2 = [0], ex2_o1 = [0];
let ex3_l1 = [9,9,9,9,9,9,9], ex3_l2 = [9,9,9,9], ex3_o1 = [8,9,9,9,0,0,0,1];
let ex4_l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], ex4_l2 = [5,6,4], ex4_o1 = [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let ex5_l1 = [9,9,9,9,9,9,9], ex5_l2 = [1], ex5_o1 = [0,0,0,0,0,0,0,1];

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [arrayToListNode(ex1_l1), arrayToListNode(ex1_l2)],
        expect_result: arrayToListNode(ex1_o1),
    },
    {
        name: 'Example 2',
        inputs: [arrayToListNode(ex2_l1), arrayToListNode(ex2_l2)],
        expect_result: arrayToListNode(ex2_o1),
    },
    {
        name: 'Example 3',
        inputs: [arrayToListNode(ex3_l1), arrayToListNode(ex3_l2)],
        expect_result: arrayToListNode(ex3_o1),
    },
    {
        name: 'Example 4',
        inputs: [arrayToListNode(ex4_l1), arrayToListNode(ex4_l2)],
        expect_result: arrayToListNode(ex4_o1),
    },
    {
        name: 'Example 5',
        inputs: [arrayToListNode(ex5_l1), arrayToListNode(ex5_l2)],
        expect_result: arrayToListNode(ex5_o1),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
