import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './4. Median of Two Sorted Arrays';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [[1,3], [2]],
        expect_result: (2),
    },
    {
        name: 'Example 2',
        inputs: [[1,2], [3,4]],
        expect_result: (2.5),
    },
    {
        name: 'Example 3 one empty array',
        inputs: [[], [3]],
        expect_result: (3),
    },
    {
        name: 'Example 4 one empty array',
        inputs: [[1,2], []],
        expect_result: (1.5),
    },
    {
        name: 'Example 5 negitive number',
        inputs: [[-1, 0], [-2, -1, 0]],
        expect_result: (-1),
    },
    {
        name: 'Example 6 negitive number',
        inputs: [[-3,-1], [-2]],
        expect_result: (-2),
    },
    {
        name: 'Example 7 negitive number',
        inputs: [[-2,-1], [-4,-3]],
        expect_result: (-2.5),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
