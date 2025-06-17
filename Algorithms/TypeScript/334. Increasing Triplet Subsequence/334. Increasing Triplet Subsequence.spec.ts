import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './334. Increasing Triplet Subsequence';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[1,2,3,4,5]],
            expect_result: true,
        },
        {
            name: 'Example 2',
            inputs: [[5,4,3,2,1]],
            expect_result: false,
        },
        {
            name: 'Example 3',
            inputs: [[2,1,5,0,4,6]],
            expect_result: true,
        },
        {
            name: 'Example 4',
            inputs: [[2,2,5,0,1]],
            expect_result: false,
        },
        {
            name: 'Example 5',
            inputs: [[1,5,0,6]],
            expect_result: true,
        },
        {
            name: 'Example 6',
            inputs: [[1]],
            expect_result: false,
        },
        {
            name: 'Example 7',
            inputs: [[1,2]],
            expect_result: false,
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
    const template = test_template(test_funtion);
    test_case_list.forEach((test_case) => template(test_case));
});
