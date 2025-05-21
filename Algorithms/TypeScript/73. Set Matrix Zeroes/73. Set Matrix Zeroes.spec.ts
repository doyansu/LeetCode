import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './73. Set Matrix Zeroes';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[[1,1,1],[1,0,1],[1,1,1]]],
            expect_result: ([[1,0,1],[0,0,0],[1,0,1]]),
        },
        {
            name: 'Example 2',
            inputs: [[[0,1,2,0],[3,4,5,2],[1,3,1,5]]],
            expect_result: ([[0,0,0,0],[0,4,5,0],[0,3,1,0]]),
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
