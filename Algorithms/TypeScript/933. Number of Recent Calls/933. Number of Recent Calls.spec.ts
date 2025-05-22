import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './933. Number of Recent Calls';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[[1], [100], [3001], [3002]]],
            expect_result: [1, 2, 3, 3],
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
