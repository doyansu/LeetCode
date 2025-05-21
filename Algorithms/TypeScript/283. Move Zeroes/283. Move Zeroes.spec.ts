import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './283. Move Zeroes';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[0,1,0,3,12]],
            expect_result: ([1,3,12,0,0]),
        },
        {
            name: 'Example 2',
            inputs: [[0]],
            expect_result: ([0]),
        },
        {
            name: 'Example 3',
            inputs: [[0, 1, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, -1, -2, 89, 7, 5, 4, 0, 7,0, 67, 0, 7, 0]],
            expect_result: ([1, 3, 12, -1, -2, 89, 7, 5, 4, 7, 67, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        },
        {
            name: 'Example 4',
            inputs: [[1]],
            expect_result: ([1]),
        },
        {
            name: 'Example 5',
            inputs: [[1, 1]],
            expect_result: ([1, 1]),
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
