import { TestCase, test_template } from '../interface/testCase';
import { arrayToListNode } from '../interface/commonFuntions'
import { test_funtions } from './21. Merge Two Sorted Lists';

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
