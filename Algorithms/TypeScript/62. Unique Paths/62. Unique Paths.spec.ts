import { TestCase, test_template } from '../interface/testCase';
import { getRandomInt } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './62. Unique Paths';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [3, 7],
            expect_result: 28,
        },
        {
            name: 'Example 2',
            inputs: [3, 2],
            expect_result: 3,
        },
        {
            name: 'Example 3',
            inputs: [7, 3],
            expect_result: 28,
        },
        {
            name: 'Example 4',
            inputs: [2, 3],
            expect_result: 3,
        },
        {
            name: 'Example 5',
            inputs: [1, 1],
            expect_result: 1,
        },
        {
            name: 'Example 6',
            inputs: [1, 3],
            expect_result: 1,
        },
        {
            name: 'Example 7',
            inputs: [3, 1],
            expect_result: 1,
        },
        {
            name: 'Example 8',
            inputs: [53, 4],
            expect_result: 26235,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let inputs: any[] = [getRandomInt(1, 20), getRandomInt(1, 20)];
            let random_test_case: TestCase = {
                name: `Random Example ${i}`,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // start test
    const template = test_template(fnc);
    test_case_list.forEach((testCase) => template(testCase));
});
