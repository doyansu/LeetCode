import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './2215. Find the Difference of Two Arrays';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[1,2,3], [2,4,6]],
            expect_result: [[1,3],[4,6]],
        },
        {
            name: 'Example 2',
            inputs: [[1,2,3,3], [1,1,2,2]],
            expect_result: [[3],[]],
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
