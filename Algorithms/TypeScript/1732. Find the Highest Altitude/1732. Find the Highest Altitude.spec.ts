import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './1732. Find the Highest Altitude';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[-5,1,5,0,-7]],
            expect_result: 1,
        },
        {
            name: 'Example 2',
            inputs: [[-4,-3,-2,-1,4,3,2]],
            expect_result: 0,
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
