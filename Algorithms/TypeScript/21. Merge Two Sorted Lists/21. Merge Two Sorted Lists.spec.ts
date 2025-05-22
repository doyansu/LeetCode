import { TestCase, test_template } from '../interface/testCase';
import { test_funtions, ListNode } from './21. Merge Two Sorted Lists';

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

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [arrayToListNode([1,2,4]), arrayToListNode([1,3,4])],
            expect_result: arrayToListNode([1,1,2,3,4,4]),
        },
        {
            name: 'Example 2',
            inputs: [arrayToListNode([]), arrayToListNode([])],
            expect_result: arrayToListNode([]),
        },
        {
            name: 'Example 3',
            inputs: [arrayToListNode([]), arrayToListNode([0])],
            expect_result: arrayToListNode([0]),
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
