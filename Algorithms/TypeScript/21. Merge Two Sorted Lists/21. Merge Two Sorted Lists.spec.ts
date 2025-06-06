import { TestCase, test_template } from '../interface/testCase';
import { transform_array_to_listNode } from '../interface/commonFuntions'
import { test_funtions } from './21. Merge Two Sorted Lists';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [transform_array_to_listNode([1,2,4]), transform_array_to_listNode([1,3,4])],
            expect_result: transform_array_to_listNode([1,1,2,3,4,4]),
        },
        {
            name: 'Example 2',
            inputs: [transform_array_to_listNode([]), transform_array_to_listNode([])],
            expect_result: transform_array_to_listNode([]),
        },
        {
            name: 'Example 3',
            inputs: [transform_array_to_listNode([]), transform_array_to_listNode([0])],
            expect_result: transform_array_to_listNode([0]),
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
