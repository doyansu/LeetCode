import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './338. Counting Bits';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [2],
            expect_result: [0,1,1],
        },
        {
            name: 'Example 2',
            inputs: [5],
            expect_result: [0,1,1,2,1,2],
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
