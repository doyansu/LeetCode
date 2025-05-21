import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './643. Maximum Average Subarray I';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[1,12,-5,-6,50,3], 4],
            expect_result: 12.75,
        },
        {
            name: 'Example 2',
            inputs: [[5], 1],
            expect_result: 5,
        },
        {
            name: 'Example 3',
            inputs: [[5, -1], 1],
            expect_result: 5,
        },
        {
            name: 'Example 4',
            inputs: [[5, -1, 10], 1],
            expect_result: 10,
        },
        {
            name: 'Example 5',
            inputs: [[5, -1, 10], 3],
            expect_result: 4.666666666666667,
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
