import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './374. Guess Number Higher or Lower';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [10, 6],
            expect_result: 6,
        },
        {
            name: 'Example 2',
            inputs: [1, 1],
            expect_result: 1,
        },
        {
            name: 'Example 3',
            inputs: [2, 1],
            expect_result: 1,
        },
        {
            name: 'Example 4',
            inputs: [4143848, 1],
            expect_result: 1,
        },
        {
            name: 'Example 5',
            inputs: [412943908, 412943908],
            expect_result: 412943908,
        },
        {
            name: 'Example 14',
            inputs: [2126753390, 1702766719],
            expect_result: 1702766719,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 0; ++i) {
            let inputs: any[] = [get_random_integer(0, 1)];
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
